---
title: Eine WebDriver BiDi-Verbindung erstellen
short-title: Eine BiDi-Verbindung herstellen
slug: Web/WebDriver/How_to/Create_BiDi_connection
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

Der Client und der Browser kommunizieren über das WebDriver BiDi-Protokoll über eine WebSocket-Verbindung. Es gibt zwei Möglichkeiten, wie ein Client diese Verbindung herstellen kann.

Bei einer Methode stellt der WebDriver-Client bei der Erstellung einer klassischen WebDriver-Sitzung die [`webSocketUrl`](/de/docs/Web/WebDriver/Reference/Capabilities/webSocketUrl)-Fähigkeit auf `true` ein, um BiDi zu aktivieren; der Client startet dann den Browser mit geöffnetem WebSocket-Port.

Bei der anderen Methode startet der WebDriver-Client den Browser über die Befehlszeile, indem er das erforderliche Flag und den gewünschten Port angibt. Diese Methode funktioniert direkt mit Firefox; Chromium-basierte Browser erfordern jedoch das zusätzliche Chromium BiDi Wrapper-Paket. Die Abschnitte in diesem Artikel führen Sie durch diese Methode mit Firefox.

## Den Browser starten

Um WebDriver BiDi zu verwenden, müssen Sie es im Browser aktivieren, indem Sie es mit dem Flag `--remote-debugging-port` starten. Der Browser wartet dann auf eingehende WebSocket-Verbindungen am angegebenen Port. Port `9222` ist eine konventionelle Voreinstellung für Browser-Debugging, aber Sie können jeden verfügbaren Port verwenden oder `0` spezifizieren, damit das System automatisch einen freien Port zuweist.

```bash
firefox --remote-debugging-port 9222
```

Unter macOS befindet sich `firefox` möglicherweise nicht in Ihrem PATH. Verwenden Sie in diesem Fall den vollständigen Pfad:

```bash
/Applications/Firefox.app/Contents/MacOS/firefox --remote-debugging-port 9222
```

## Die WebSocket-URL erhalten

Firefox stellt das BiDi-WebSocket direkt bereit unter:

```plain
ws://127.0.0.1:PORT/session
```

Beispielsweise, wenn Sie Firefox mit `--remote-debugging-port 9222` gestartet haben, lautet die URL `ws://127.0.0.1:9222/session`. Wenn Sie Port `0` angegeben haben, prüfen Sie die `stderr`-Ausgabe auf eine Nachricht wie `WebDriver BiDi listening on ws://127.0.0.1:46249`, um den zugewiesenen Port zu finden.

> [!NOTE]
> Firefox verwendet `127.0.0.1` anstelle von `localhost` für den BiDi-WebSocket-Endpunkt.

## Verbindung mit dem WebSocket-Endpunkt herstellen

Mit der WebSocket-URL können Sie mit jedem WebSocket-Client eine Verbindung öffnen. Häufige Optionen sind das `ws`-Paket für Node.js und das `websockets`-Paket für Python.

Sobald Sie verbunden sind, können Sie WebDriver BiDi-[Befehle](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) als JSON-Nachrichten senden und Antworten und [Ereignisse](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) vom Browser empfangen. Siehe [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), um nach der Verbindung eine BiDi-Sitzung zu erstellen.

## Siehe auch

- [WebDriver BiDi-Referenz](/de/docs/Web/WebDriver/Reference/BiDi)
- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Chromium BiDi Wrapper](https://github.com/GoogleChromeLabs/chromium-bidi)
- [WebDriver BiDi-Web-Client](https://firefox-dev.tools/bidi-web-client/web/)
