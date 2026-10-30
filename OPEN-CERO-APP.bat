@echo off
setlocal
title CERO Healthcare - Starting App
cd /d "%~dp0"

:: If CERO is already running, simply open it in the browser.
powershell -NoProfile -Command "if (Get-NetTCPConnection -LocalPort 5173 -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }"
if %errorlevel%==0 goto openBrowser

:: Start the finished CERO web application in a small background window.
start "CERO Server - keep this open" /min cmd /k "npm run dev -- --host 127.0.0.1 --port 5173"
powershell -NoProfile -Command "Start-Sleep -Seconds 4"

:openBrowser
start "CERO Healthcare" "http://127.0.0.1:5173/"
exit /b
