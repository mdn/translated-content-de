---
title: Prompt API
slug: Web/API/Prompt_API
l10n:
  sourceCommit: 343ab51426f9279175b8f71fff911621d0a7da20
---

{{DefaultAPISidebar("Prompt API")}}{{SecureContext_Header}}

> [!WARNING]
> Diese Funktion wird derzeit von zwei Browser-Anbietern abgelehnt. Siehe den Abschnitt [Standards-Positionen](#standards-positionen) unten für Details zur Ablehnung.

Die **Prompt-API** ermöglicht es Webseiten, ein Sprachmodell, das vom User-Agent bereitgestellt wird, direkt über eine JavaScript-Schnittstelle anzusprechen, ohne dass implementierungsspezifische Details des verwendeten KI-Modells verwaltet werden müssen.

## Konzepte und Nutzung

Die Verwendung von KI-Prompts zur Informationsrückgabe ist im Web sehr verbreitet. Beispiele hierfür sind schnelle Informationssuche, Code- und Inhaltserstellung, Chatbots zur Bereitstellung von Kundendienstfunktionen, Bilderkennung und -beschreibung, Audiotranskription und mehr.

Die Prompt-API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website das interne KI-Modell des Browsers ansprechen kann. Ein Modell auf dem Gerät ist nützlich und effizient, weil sensible Daten auf dem Gerät des Nutzers bleiben können, das Modell offline verfügbar ist und Entwickler die Kosten und die Latenz von API-Aufrufen an externe Dienste vermeiden können. Die API abstrahiert modellspezifische Details wie Tokenisierung und Templating, sodass Entwickler diese Unterschiede bei verschiedenen Implementierungen nicht handhaben müssen.

Die gesamte Interaktion mit dem Sprachmodell erfolgt über eine [`LanguageModel`](/de/docs/Web/API/LanguageModel)-Sitzung. Sie können diese Sitzung verwenden, um den Kontext für das Modell anzugeben, zum Beispiel durch Bereitstellung von Dokumenten, Hintergrundinformationen oder Gesprächsverläufen, und es zu auffordern, auf spezifische Fragen zu antworten.

Bevor Sie eine Sitzung erstellen, können Sie die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) aufrufen, um festzustellen, ob das Sprachmodell eine bestimmte Konfiguration auf dem aktuellen Gerät unterstützt. Dies ermöglicht es Seiten, sich anmutig anzupassen, falls die Daten für die gewünschte Konfiguration nicht bereitgestellt oder heruntergeladen werden können. Zum Beispiel könnten Sie eine Download-Aufforderung anzeigen oder auf einen cloudbasierten KI-Dienst zurückgreifen, anstatt eine Sitzung zu erstellen, die dann fehlschlägt.

Eine Sitzung wird durch Aufruf der statischen Methode [`create()`](/de/docs/Web/API/LanguageModel/create_static) erstellt. Sobald Sie eine Sitzung haben, können Sie [`append()`](/de/docs/Web/API/LanguageModel/append) aufrufen, um Inhalte in die Sitzung vorzubereiten, ohne eine Antwort zu generieren, und [`prompt()`](/de/docs/Web/API/LanguageModel/prompt) oder [`promptStreaming()`](/de/docs/Web/API/LanguageModel/promptStreaming), um Text oder multimodalen Input zu senden und die Antwort zu erhalten.

Sie können ausstehende Operationen wie `create()`, `prompt()` und `append()` mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageModel`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jede weitere Aktivität stoppen, indem Sie ihre Methode [`LanguageModel.destroy()`](/de/docs/Web/API/LanguageModel/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

Um loszulegen, schauen Sie sich die [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using) für eine Einführung in die Grundlagen an.

## Schnittstellen

- [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) {{Experimental_Inline}}
  - : Bietet Informationen über den Fortschritt eines KI-Modell-Downloads, beispielsweise eines Sprachpakets oder einiger Feinabstimmungsdaten.
- [`LanguageModel`](/de/docs/Web/API/LanguageModel) {{Experimental_Inline}}
  - : Repräsentiert eine Sitzung mit einem vom Browser bereitgestellten Sprachmodell. Bietet statische Methoden zur Erstellung von Sitzungen und zur Überprüfung der Verfügbarkeit sowie Instanzmethoden für das Ansprechen des Modells, die Verwaltung von Kontexten, das Klonen von Sitzungen usw.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-model", "language-model")}}-Direktive {{Experimental_Inline}}
  - : Kontrolliert den Zugriff auf die Prompt-Funktionalität.
    Wo eine Richtlinie die Nutzung speziell untersagt, wird die statische Methode [`LanguageModel.availability()`](/de/docs/Web/API/LanguageModel/availability_static) `unavailable` zurückgeben, und jeder Versuch, andere `LanguageModel`-Methoden aufzurufen, wird mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Sicherheitsüberlegungen

Die Prompt-API ist auf [sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts) (HTTPS) beschränkt. Zusätzlich erfordert die Erstellung von `LanguageModel`-Objekten, dass der Nutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch über die Direktive {{httpheader("Permissions-Policy/language-model", "language-model")}} und {{httpheader("Permissions-Policy")}} gesteuert.

## Beispiele

Für vollständige Beispiele schauen Sie sich unsere Leitfäden an, beginnend mit [Verwendung der Prompt-API](/de/docs/Web/API/Prompt_API/Using).

Siehe auch die Demos des Chrome dev rel-Teams:

- [Prompt-API-Playground](https://chrome.dev/web-ai-demos/prompt-api-playground/)
- [MediaRecorder-Audiotranskription](https://chrome.dev/web-ai-demos/mediarecorder-audio-prompt/)
- [Canvas-API-Bild-Prompt](https://chrome.dev/web-ai-demos/canvas-image-prompt/)

## Spezifikationen

{{Specifications}}

### Standards-Positionen

Zwei Browser-Anbieter {{Glossary("Web_standards#opposing_standards", "lehnen")}} diese Spezifikation ab.
Bekannte Standard-Positionen sind wie folgt:

- Mozilla (Firefox): [Negativ](https://github.com/mozilla/standards-positions/issues/1213)
- Apple (WebKit): [Negativ](https://github.com/WebKit/standards-positions/issues/495)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Prompt-API](https://developer.chrome.com/docs/ai/prompt-api) auf developer.chrome.com (2026)
