---
title: Summarizer API
slug: Web/API/Summarizer_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{SeeCompatTable}}{{DefaultAPISidebar("Summarizer API")}}

Die **Summarizer API** fasst einen gegebenen Textkörper mithilfe eines internen KI-Modells des Browsers zusammen (was zwischen den Browsern variieren kann).

## Konzepte und Verwendung

Das Schreiben einer Zusammenfassung eines größeren Textkörpers ist eine häufige Schreibaufgabe, für die KI gut geeignet ist. Typische Anwendungsfälle sind:

- Bereitstellung einer Zusammenfassung eines vollständigen Artikels, damit der Leser entscheiden kann, ob er das ganze lesen möchte.
- Zusammenfassung eines Besprechungsprotokolls, damit spät hinzukommende Teilnehmer den verpassten Inhalt schnell nachholen können.
- Zusammenfassung einer Reihe von Produktbewertungen, um schnell die allgemeine Stimmung zu kommunizieren.

Die Summarizer API bietet einen asynchronen ({{jsxref("Promise")}}-basierten) Mechanismus, mit dem eine Website einen Textkörper in das interne KI-Modell des Browsers einspeisen und eine Zusammenfassung des Textes basierend auf angegebenen Optionen anfordern kann.

Dies wird mithilfe der Funktionalität der [`Summarizer`](/de/docs/Web/API/Summarizer)-Schnittstelle in einem zweistufigen Prozess durchgeführt:

1. Erstellen Sie eine `Summarizer`-Objektinstanz mit der statischen Methode [`Summarizer.create()`](/de/docs/Web/API/Summarizer/create_static), indem Sie Optionen angeben, welche Art von Zusammenfassung Sie möchten. Optionen umfassen Länge, Typ (zum Beispiel "tldr" oder Schlüsselpunkte), Format (nur Text oder Markdown) sowie Eingabe- und Ausgabesprachen.
   > [!NOTE]
   > Wenn Sie überprüfen möchten, ob das KI-Modell des Browsers Ihre Präferenzen unterstützen kann, können Sie dies mit der statischen Methode [`Summarizer.availability()`](/de/docs/Web/API/Summarizer/availability_static) tun.
2. Führen Sie die Instanzmethode [`Summarizer.summarize()`](/de/docs/Web/API/Summarizer/summarize) aus, um die Zusammenfassung anzufordern.

Sie können einen ausstehenden `create()`- oder `summarize()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `Summarizer`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jede weitere Aktivität stoppen, indem Sie ihre Methode [`Summarizer.destroy()`](/de/docs/Web/API/Summarizer/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das `Summarizer`-Objekt verwendet haben, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using) für eine detaillierte Anleitung, wie die API funktioniert.

## Schnittstellen

- [`Summarizer`](/de/docs/Web/API/Summarizer) {{Experimental_Inline}}
  - : Beinhaltet die gesamte Funktionalität der Summarizer API, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Summarizer`-Instanz, der Verwendung zur Generierung einer neuen Zusammenfassung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader('Permissions-Policy/summarizer','summarizer')}} Direktive
  - : Steuert den Zugriff auf die Summarizer API. Wo eine Richtlinie die Nutzung der Summarizer API ausdrücklich untersagt, schlagen alle Versuche, die Methoden der API aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Spezifikation erfordert, dass ein Benutzer kürzlich mit der Seite interagiert hat, wenn `Summarizer`-Objekte erstellt werden ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Zusätzlich steuert die Spezifikation den Zugriff auf die API über {{httpheader('Permissions-Policy/summarizer','summarizer')}} {{httpheader("Permissions-Policy")}}-Direktiven.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [Verwendung der Summarizer API](/de/docs/Web/API/Summarizer_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zusammenfassung mit eingebauter KI](https://developer.chrome.com/docs/ai/summarizer-api) auf developer.chrome.com (2025)
- [Web-AI-Demos](https://chrome.dev/web-ai-demos/) auf chrome.dev
