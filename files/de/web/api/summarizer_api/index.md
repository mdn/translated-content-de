---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: a826b5172758864ad40e9347647aba3483ff2639
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer-API** fasst einen gegebenen Textkörper mithilfe des internen KI-Modells eines Browsers zusammen (dies kann zwischen Browsern variieren).

## Konzepte und Nutzung

Das Schreiben einer Zusammenfassung eines größeren Textkörpers ist eine häufige Schreibaufgabe, für die KI gut geeignet ist. Typische Anwendungsfälle sind:

- Bereitstellung einer Zusammenfassung eines vollständigen Artikels, damit der Leser beurteilen kann, ob er den gesamten Artikel lesen möchte.
- Zusammenfassen eines Sitzungsprotokolls, damit Personen, die spät zur Sitzung kommen, schnell den Überblick darüber bekommen, was sie verpasst haben.
- Zusammenfassen einer Reihe von Produktbewertungen, um schnell das allgemeine Stimmungsbild zu kommunizieren.

Die Summarizer-API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website einen Textkörper in das interne KI-Modell des Browsers einspeisen und eine Zusammenfassung des Textes basierend auf festgelegten Optionen anfordern kann.

Dies erfolgt mithilfe der Funktionalität, die von der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle bereitgestellt wird, in einem zweistufigen Prozess:

1. Erstellen Sie eine Instanz des `Summarizer`-Objekts mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), wobei Sie Optionen festlegen, welche Art von Zusammenfassung Sie möchten. Zu den Optionen gehören Länge, Typ (z. B. "tl;dr" oder Schlüsselpunkte), Format (Klartext oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie überprüfen möchten, ob das KI-Modell des Browsers Ihre Präferenzen unterstützen kann, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie mit der Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) wieder entfernen. Sie können auch eine ausstehende `create()`- oder `summarize()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Siehe [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using) für eine detaillierte Anleitung, wie die API funktioniert.

## Schnittstellen

- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Enthält alle Funktionalitäten für die Summarizer-API, einschließlich Überprüfung der Verfügbarkeit des KI-Modells, Erstellen einer neuen `Summarizer`-Instanz, Verwendung zur Erstellung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/summarizer','summarizer')}} Direktive
  - : Steuert den Zugriff auf die Summarizer-API. Wenn eine Richtlinie die Nutzung der Summarizer-API ausdrücklich untersagt, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Zusätzlich steuert die Spezifikation den Zugriff auf die API über {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}} Direktiven.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zusammenfassen mit integrierter KI](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
