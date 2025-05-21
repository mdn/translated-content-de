---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: 683890a47fa52942b23dd4406c7f095bb70b1c59
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer-API** fasst einen gegebenen Textkörper über das interne KI-Modell eines Browsers zusammen.

## Konzepte und Verwendung

Das Schreiben einer Zusammenfassung eines größeren Textkörpers ist eine häufige Schreibaufgabe, die sich gut für KI eignet. Typische Anwendungsfälle sind:

- Bereitstellen einer Zusammenfassung eines gesamten Artikels, damit der Leser entscheiden kann, ob er den ganzen Artikel lesen möchte.
- Zusammenfassen eines Sitzungsprotokolls, damit Späteinsteiger schnell erfahren, was sie verpasst haben.
- Zusammenfassen einer Reihe von Produktbewertungen, um schnell die allgemeine Stimmung zu kommunizieren.

Die Summarizer-API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um einem Textkörper in das interne KI-Modell des Browsers einzugeben und eine Zusammenfassung des Textes basierend auf bestimmten Optionen anzufordern.

Dies geschieht mit der Funktionalität, die von der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle bereitgestellt wird, in einem zweistufigen Prozess:

1. Erstellen Sie eine Instanz des `Summarizer`-Objekts mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), wobei Sie Optionen angeben, welche Art von Zusammenfassung Sie wünschen. Zu den Optionen gehören Länge, Typ (zum Beispiel "tl;dr" oder Hauptpunkte), Format (unformatierter Text oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie überprüfen möchten, ob das browserinterne KI-Modell Ihre Vorlieben unterstützt, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie sie mit der Instanzmethode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) wieder entfernen. Sie können auch eine ausstehende `create()`- oder `summarize()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Siehe [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using) für eine Anleitung, wie die API funktioniert.

## Schnittstellen

- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionalitäten der Summarizer-API, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Summarizer`-Instanz, ihrer Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/summarizer','summarizer')}}-Direktive
  - : Kontrolliert den Zugang zur Summarizer-API. Wo eine Richtlinie die Nutzung der Summarizer-API ausdrücklich untersagt, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden ([transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Darüber hinaus steuert die Spezifikation den Zugang zur API über {{httpheader('Permissions-Policy/summarizer','summarizer')}}-{{httpheader("Permissions-Policy")}}-Direktiven.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zusammenfassen mit integrierter KI](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
