---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: 3e4f9ff802c6393edf7c17ff0d9c30d0de79663e
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer API** fasst einen gegebenen Textkörper über das interne AI-Modell eines Browsers zusammen (dies kann zwischen den Browsern variieren).

## Konzepte und Nutzung

Eine Zusammenfassung eines größeren Textkörpers zu schreiben, ist eine häufige Schreibaufgabe, für die KI gut geeignet ist. Typische Anwendungsfälle umfassen:

- Bereitstellen einer Zusammenfassung eines vollständigen Artikels, sodass der Leser entscheiden kann, ob er den gesamten Artikel lesen möchte.
- Zusammenfassen eines Sitzungsprotokolls, sodass Nachzügler schnell nachvollziehen können, was sie verpasst haben.
- Zusammenfassen einer Reihe von Produktbewertungen, um schnell die allgemeine Stimmung zu kommunizieren.

Die Summarizer API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website einen Textkörper in das eigene interne AI-Modell des Browsers einspeisen und eine Zusammenfassung des Textes basierend auf den angegebenen Optionen anfordern kann.

Dies erfolgt mit der Funktionalität, die von der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle in einem zweistufigen Prozess bereitgestellt wird:

1. Erstellen Sie eine `Summarizer`-Objektinstanz mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static). Dabei geben Sie Optionen an, welche Art von Zusammenfassung Sie wünschen. Optionen umfassen Länge, Typ (zum Beispiel "tldr" oder Hauptpunkte), Format (Klartext oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie prüfen möchten, ob das Browser-AI-Modell Ihre Präferenzen unterstützt, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie mit der Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) wieder entfernen. Sie können auch eine ausstehende `create()`- oder `summarize()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Sehen Sie sich [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für einen ausführlichen Überblick darüber an, wie die API funktioniert.

## Schnittstellen

- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Beinhaltet die gesamte Funktionalität für die Summarizer API, einschließlich der Prüfung der Verfügbarkeit des AI-Modells, Erstellung einer neuen `Summarizer`-Instanz, deren Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; Die Direktive {{httpheader('Permissions-Policy/summarizer','summarizer')}}
  - : Kontrolliert den Zugriff auf die Summarizer API. Wo eine Richtlinie die Nutzung der Summarizer API speziell verbietet, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden ([flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Darüber hinaus kontrolliert die Spezifikation den Zugriff auf die API über {{httpheader('Permissions-Policy/summarizer','summarizer')}}-{{httpheader("Permissions-Policy")}}-Direktiven.

## Beispiele

Für ein vollständiges Beispiel, siehe [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zusammenfassen mit eingebauter KI](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
