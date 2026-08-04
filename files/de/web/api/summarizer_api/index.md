---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer-API** fasst einen gegebenen Textkörper durch das interne KI-Modell eines Browsers zusammen (das je nach Browser unterschiedlich sein kann).

## Konzepte und Verwendung

Das Verfassen einer Zusammenfassung eines größeren Textkörpers ist eine häufige Schreibaufgabe, die von KI gut bewältigt werden kann. Typische Anwendungsfälle umfassen:

- Bereitstellung einer Zusammenfassung eines vollständigen Artikels, damit der Leser entscheiden kann, ob er den gesamten Artikel lesen möchte.
- Zusammenfassung eines Sitzungsprotokolls, damit verspätet hinzukommende Teilnehmer schnell nachvollziehen können, was sie verpasst haben.
- Zusammenfassung einer Reihe von Produktbewertungen, um schnell die allgemeine Stimmung zu kommunizieren.

Die Summarizer-API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus für eine Website, um einen Textkörper in das interne KI-Modell des Browsers einzuspeisen und eine Zusammenfassung des Textes basierend auf den angegebenen Optionen anzufordern.

Dies geschieht mit der Funktionalität, die durch das [`Summarizer`](/de/docs/Web/API/Summarizer)-Interface in einem zweistufigen Prozess bereitgestellt wird:

1. Erstellen Sie eine Instanz des `Summarizer`-Objekts mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), unter Angabe von Optionen für die Art der gewünschten Zusammenfassung. Optionen umfassen Länge, Typ (zum Beispiel "tldr" oder Schlüsselpunkte), Format (Klartext oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie überprüfen möchten, ob das AI-Modell des Browsers Ihre Präferenzen unterstützen kann, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Sie können ein ausstehendes `create()`- oder `summarize()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine Instanz des `Summarizer` erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie die Methode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) aufrufen. Es wird Ihnen geraten, dies zu tun, nachdem Sie das `Summarizer`-Objekt verwendet haben, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using) für eine Anleitung, wie die API funktioniert.

## Schnittstellen

- [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) {{Experimental_Inline}}
  - : Bietet Informationen über den Fortschritt eines Downloads des KI-Modells, beispielsweise eines Sprachpakets oder einiger Feinabstimmungsdaten.
- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Enthält alle Funktionen der Summarizer-API, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Summarizer`-Instanz, der Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/summarizer','summarizer')}}-Direktive
  - : Kontrolliert den Zugriff auf die Summarizer-API. Wo eine Richtlinie die Verwendung der Summarizer-API spezifisch verbietet, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Zusätzlich regelt die Spezifikation den Zugriff auf die API über {{httpheader('Permissions-Policy/summarizer','summarizer')}}-{{httpheader("Permissions-Policy")}}-Direktiven.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Summarizer-API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zusammenfassen mit eingebauter KI](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
