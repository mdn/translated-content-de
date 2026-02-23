---
title: WebDriver BiDi-Referenz
short-title: BiDi
slug: Web/WebDriver/Reference/BiDi
l10n:
  sourceCommit: 62b11997b60e0193008b0aacf24195eba83d94d5
---

WebDriver BiDi ist ein bidirektionales Protokoll zur Browser-Automatisierung, das eine ereignisgesteuerte Kommunikation zwischen dem lokalen Ende (dem Automatisierungs-Client) und dem entfernten Ende (dem Browser) bereitstellt. Diese Referenz dokumentiert die Module, Befehle, Ereignisse, Fähigkeiten und Fehler, die in WebDriver BiDi verfügbar sind.

Im Gegensatz zum HTTP-Anfrage-Antwort-Modell von [WebDriver Classic](/de/docs/Web/WebDriver/Reference/Classic) ermöglicht BiDi Echtzeit-Ereignisse und unterstützt fortgeschrittene Automatisierungsszenarien durch WebSocket-basierte Kommunikation.

- [Module](/de/docs/Web/WebDriver/Reference/BiDi/Modules)
  - : Sammlungen verwandter Befehle und Ereignisse, die in spezifischen Fällen der Browser-Automatisierung verwendet werden.
- Befehle
  - : Asynchrone Operationen zur Inspektion und Steuerung des Verhaltens von Browsern, Verwaltung von Browsersitzungen und -kontexten, Ausführung von Skripten, Überwachung der Netzwerkaktivität, Interaktion mit DOM-Elementen und Emulation von Browser-APIs.
- Ereignisse
  - : Benachrichtigungen, die vom entfernten Ende (dem Browser) gesendet werden und signalisieren, dass etwas von Interesse geschehen ist.
- Fähigkeiten
  - : Konfigurationsoptionen, die verwendet werden, um die von einer Sitzung unterstützten Funktionen zu kommunizieren und zu definieren, welche Funktionen der Treiber erfüllen muss, wenn eine neue Sitzung erstellt wird.
- Fehler
  - : Fehlercodes, die von Befehlen zurückgegeben werden können.
