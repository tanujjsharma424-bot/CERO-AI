@echo off
title CERO Healthcare - Launch Platform
color 0b
echo ========================================================
echo         CERO - Intelligent Chronic Patient Care
echo ========================================================
echo.
echo Choose how you would like to run CERO:
echo.
echo [1] Open Instant Ready-Made App (Opens in Browser immediately, no setup needed)
echo [2] Start Vite Dev Server (Runs npm run dev on http://localhost:5173)
echo [3] Run Production Preview
echo.
set /p choice="Enter your choice (1, 2, or 3): "

if "%choice%"=="1" (
    echo Opening CERO-Healthcare-App.html...
    start "" "%~dp0CERO-Healthcare-App.html"
    exit /b
)

if "%choice%"=="2" (
    echo Starting local dev server...
    start http://localhost:5173
    npm run dev
    exit /b
)

if "%choice%"=="3" (
    echo Starting production preview...
    npm run preview
    exit /b
)

echo Opening default standalone file...
start "" "%~dp0CERO-Healthcare-App.html"
pause
