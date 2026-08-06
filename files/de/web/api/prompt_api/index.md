---
title: Prompt API
slug: Web/API/Prompt_API
l10n:
  sourceCommit: 4ffb7c4d246f8f5dac5f4829b3f5b8789a62f143
---

{{DefaultAPISidebar("Prompt API")}}{{SeeCompatTable}}{{SecureContext_Header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browseranbietern abgelehnt. Siehe den Abschnitt [Standards Positionen](#standards_positionen) unten für Details zur Ablehnung.

Die **Prompt-API** ermöglicht es Webseiten, direkt über eine JavaScript-Schnittstelle ein Sprachmodell, das vom Benutzeragenten bereitgestellt wird, aufzurufen, ohne dass implementationsspezifische Details des verwendeten KI-Modells verwaltet werden müssen.

## Konzepte und Nutzung

Die Verwendung von KI-Prompts zur Informationsbereitstellung ist im Web sehr verbreitet, mit Beispielen wie schnellen Informationsabfragen, Code- und Inhaltserstellung, Chatbots zur Bereitstellung von Kundenservices, Bildidentifikation und -beschreibung, Audiotranskription und mehr.

Die Prompt-API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um das interne KI-Modell des Browsers abzufragen. Ein Modell auf dem Gerät ist nützlich und effizient, da sensible Daten auf dem Gerät des Benutzers bleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und Latenzen von API-Aufrufen an externe Dienste vermeiden können. Die API abstrahiert modellspezifische Details wie Tokenisierung und Templating, sodass Entwickler sich nicht mit diesen Unterschieden zwischen verschiedenen Implementierungen beschäftigen müssen.

Alle Interaktionen mit dem Sprachmodell erfolgen über eine [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Sitzung.
Sie können diese Sitzung nutzen, um Kontext für das Modell bereitzustellen, z.B. durch Dokumente, Hintergrundinformationen oder Gesprächsverläufe, und es auffordern, auf spezifische Fragen zu antworten.

Bevor Sie eine Sitzung erstellen, können Sie die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) aufrufen, um festzustellen, ob das Sprachmodell eine bestimmte Konfiguration auf dem aktuellen Gerät unterstützt. Dies ermöglicht es Seiten, sich anmutig anzupassen, wenn Daten für die gewünschte Konfiguration nicht bereitgestellt oder heruntergeladen werden können. Zum Beispiel könnten Sie einen Download-Dialog anzeigen oder auf einen cloudbasierten KI-Dienst zurückgreifen, anstatt eine Sitzung zu erstellen, die dann scheitert.

Eine Sitzung wird durch Aufrufen der statischen Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) erstellt. Sobald Sie eine Sitzung haben, können Sie [`append()`](/de/docs/Web/API/LanguageModel/append) aufrufen, um Inhalte vorzuladen, ohne eine Antwort zu erzeugen, und [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um Text- oder multimodale Eingaben zu senden und die Antwort zu erhalten.

Sie können ausstehende Operationen wie `create()`, `prompt()` und `append()` mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageModel`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jede weitere Aktivität stoppen, indem Sie ihre Methode [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

Um loszulegen, schauen Sie sich [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using) für eine Einführung in die Grundlagen an.

## Schnittstellen

- [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) {{Experimental_Inline}}
  - : Bietet Informationen über den Fortschritt eines KI-Modell-Downloads, z.B. eines Sprachpakets oder einiger Feinabstimmungsdaten.
- [`LanguageModel`](/de/docs/Web/API/LanguageModel) {{Experimental_Inline}}
  - : Stellt eine Sitzung mit einem vom Browser bereitgestellten Sprachmodell dar. Bietet statische Methoden zum Erstellen von Sitzungen und Überprüfen der Verfügbarkeit sowie Instanzmethoden zum Abfragen des Modells, Verwalten des Kontexts, Klonen von Sitzungen usw.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-model", "language-model")}}-Direktive {{Experimental_Inline}}
  - : Steuert den Zugriff auf die Prompt-Funktionalität.
    Wenn eine Richtlinie die Nutzung speziell untersagt, wird die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) `unavailable` zurückgeben, und alle Versuche, andere `LanguageModel`-Methoden aufzurufen, scheitern mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException).

## Sicherheitserwägungen

Die Prompt-API ist auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) (HTTPS) beschränkt. Außerdem erfordert die Erstellung von `LanguageModel`-Objekten, dass der Benutzer kürzlich mit der Seite interagiert hat (eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch über die Direktive {{httpheader("Permissions-Policy/language-model", "language-model")}} der {{httpheader("Permissions-Policy")}} gesteuert.

## Beispiele

Für vollständige Beispiele schauen Sie sich unsere Leitfäden an, beginnend mit [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using).

Siehe auch die Demos des Chrome-Dev-Rel-Teams:

- [Prompt-API-Spielplatz](https://chrome.dev/web-ai-demos/prompt-api-playground/)
- [MediaRecorder Audiotranskription](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/)
- [Canvas-API Bildaufforderung](https://chrome.dev/web-ai-demos/canvas-image-prompt/)

## Spezifikationen

{{Specifications}}

### Standards Positionen

Zwei Browseranbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standards Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/1213)
- Apple (WebKit): [Negativ](https://github.com/WebKit/standards-positions/issues/495)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Prompt-API](https://developer.chrome.com/docs/ai/prompt-api) auf developer.chrome.com (2026)
