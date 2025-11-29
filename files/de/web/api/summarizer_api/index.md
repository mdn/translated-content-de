---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer API** fasst einen gegebenen Textkörper über das interne AI-Modell eines Browsers zusammen (welches sich zwischen den Browsern unterscheiden kann).

## Konzepte und Nutzung

Das Schreiben einer Zusammenfassung eines größeren Textkörpers ist eine häufige Schreibaufgabe, die sich gut für AI eignet. Typische Anwendungsfälle umfassen:

- Bereitstellung einer Zusammenfassung eines gesamten Artikels, damit der Leser entscheiden kann, ob er den gesamten Artikel lesen möchte.
- Zusammenfassung eines Meeting-Transkripts, damit Teilnehmer, die sich spät einloggen, schnell verstehen können, was sie verpasst haben.
- Zusammenfassung einer Reihe von Produktbewertungen, um schnell die allgemeine Stimmung zu kommunizieren.

Die Summarizer API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website einen Textkörper in das interne AI-Modell des Browsers einspeisen und eine Zusammenfassung des Textes basierend auf angegebenen Optionen anfordern kann.

Dies erfolgt über die Funktionalität, die durch das [`Summarizer`](/de/docs/Web/API/Summarizer)-Interface bereitgestellt wird, in einem zweistufigen Prozess:

1. Erstellen Sie eine Instanz des `Summarizer`-Objekts mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), indem Sie Optionen angeben, welche Art von Zusammenfassung Sie erstellen möchten. Optionen umfassen Länge, Typ (zum Beispiel "tldr" oder Hauptpunkte), Format (Klartext oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie überprüfen möchten, ob das AI-Modell des Browsers Ihre Präferenzen unterstützen kann, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Sie können eine ausstehende `create()`- oder `summarize()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie ihre Methode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie mit dem `Summarizer`-Objekt fertig sind, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für einen Rundgang, wie die API funktioniert.

## Schnittstellen

- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Enthält die gesamte Funktionalität für die Summarizer API, einschließlich der Überprüfung der Verfügbarkeit von AI-Modellen, der Erstellung einer neuen `Summarizer`-Instanz, deren Nutzung zur Generierung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/summarizer','summarizer')}}-Direktive
  - : Steuert den Zugriff auf die Summarizer API. Wo eine Richtlinie die Nutzung der Summarizer API ausdrücklich untersagt, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation verlangt, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden (eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Zusätzlich steuert die Spezifikation den Zugriff auf die API über die {{httpheader('Permissions-Policy/summarizer','summarizer')}}-{{httpheader("Permissions-Policy")}}-Direktiven.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mit eingebauter AI zusammenfassen](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
