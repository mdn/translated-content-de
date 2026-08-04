---
title: Prompt API
slug: Web/API/Prompt_API
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{DefaultAPISidebar("Prompt API")}}{{SeeCompatTable}}{{SecureContext_Header}}

> [!WARNING]
> Dieses Feature wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details zur Ablehnung.

Die **Prompt API** erlaubt es Webseiten, ein Sprachmodell direkt vom User-Agent über eine JavaScript-Schnittstelle abzurufen, ohne die implementierungsspezifischen Details des verwendeten KI-Modells verwalten zu müssen.

## Konzepte und Verwendung

Das Verwenden von KI-Prompts, um Informationen zurückzugeben, ist im Web sehr verbreitet. Beispiele sind das schnelle Abrufen von Informationen, die Erzeugung von Code und Inhalten, Chatbots zur Bereitstellung von Kundenservice-Funktionen, Bildidentifikation und -beschreibung, Audiotranskription und mehr.

Die Prompt API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, um ein internes KI-Modell des Browsers anzusprechen. Ein Modell auf dem Gerät zu haben, ist nützlich und effizient, da sensible Daten auf dem Gerät des Nutzers verbleiben können, das Modell offline verfügbar ist, und Entwickler die Kosten und Latenzzeiten von API-Aufrufen zu externen Diensten vermeiden können. Die API abstrahiert modellspezifische Details wie Tokenisierung und Templating, sodass Entwickler diese Unterschiede bei verschiedenen Implementierungen nicht handhaben müssen.

Die gesamte Interaktion mit dem Sprachmodell erfolgt über eine [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Sitzung. Sie können diese Sitzung nutzen, um den Kontext für das Modell festzulegen, z. B. Dokumente, Hintergrundinformationen oder Gesprächsverläufe bereitzustellen, und es aufzufordern, Antworten auf bestimmte Fragen zu geben.

Vor dem Erstellen einer Sitzung können Sie die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) aufrufen, um festzustellen, ob das Sprachmodell eine gegebene Konfiguration auf dem aktuellen Gerät unterstützt. Dadurch können sich Seiten anpassen, wenn Daten für die gewünschte Konfiguration nicht bereitgestellt oder heruntergeladen werden können. Beispielsweise könnten Sie ein Download-Prompt anzeigen oder auf einen Cloud-basierten KI-Dienst zurückfallen, anstatt eine Sitzung zu erstellen, die nur fehlschlägt.

Eine Sitzung wird durch Aufruf der statischen Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) erstellt. Sobald Sie eine Sitzung haben, können Sie [`append()`](/de/docs/Web/API/LanguageModel/append) aufrufen, um Inhalte zu laden, ohne eine Antwort zu generieren, und [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um Text oder multimodale Eingaben zu senden und die Antwort zu empfangen.

Sie können ausstehende Operationen wie `create()`, `prompt()` und `append()` mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageModel`-Instanz erstellt wurde, können Sie deren zugewiesene Ressourcen freigeben und jede weitere Aktivität beenden, indem Sie deren Methode [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie mit dem Objekt fertig sind, da es viele Ressourcen verbrauchen kann.

Um loszulegen, sehen Sie sich [Using the Prompt API](/de/docs/Web/API/Prompt_API/Using) an, um eine Einführung in die Grundlagen zu erhalten.

## Schnittstellen

- [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) {{Experimental_Inline}}
  - : Bietet Informationen über den Fortschritt eines KI-Modell-Downloads, z.B. ein Sprachpaket oder einige Feineinstellungen.
- [`LanguageModel`](/de/docs/Web/API/LanguageModel) {{Experimental_Inline}}
  - : Repräsentiert eine Sitzung mit einem Sprachmodell des Browsers. Bietet statische Methoden zum Erstellen von Sitzungen und Prüfen der Verfügbarkeit sowie Instanzmethoden zur Abfrage des Modells, zur Kontextverwaltung, zum Klonen von Sitzungen usw.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-model", "language-model")}} Direktive {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Abruffunktionalität.
    Wo eine Richtlinie ihre Nutzung ausdrücklich untersagt, gibt die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) `unavailable` zurück, und alle Versuche, andere `LanguageModel`-Methoden aufzurufen, schlagen mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitserwägungen

Die Prompt API ist auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) (HTTPS) beschränkt. Darüber hinaus erfordert die Erstellung von `LanguageModel`-Objekten, dass der Nutzer kürzlich mit der Seite interagiert hat (eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch über die {{httpheader("Permissions-Policy/language-model", "language-model")}} {{httpheader("Permissions-Policy")}} Direktive kontrolliert.

## Beispiele

Für vollständige Beispiele, schauen Sie sich unsere Leitfäden an, beginnend mit [Using the Prompt API](/de/docs/Web/API/Prompt_API/Using).

Sehen Sie auch die Demos des Chrome Dev Rel-Teams:

- [Prompt API Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/)
- [MediaRecorder Audio Transkription](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/)
- [Canvas API Bild-Prompt](https://chrome.dev/web-ai-demos/canvas-image-prompt/)

## Spezifikationen

{{Specifications}}

### Standards Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/1213)
- Apple (WebKit): [Negativ](https://github.com/WebKit/standards-positions/issues/495)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Prompt API](https://developer.chrome.com/docs/ai/prompt-api) auf developer.chrome.com (2026)
