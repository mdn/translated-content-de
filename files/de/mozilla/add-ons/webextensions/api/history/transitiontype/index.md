---
title: history.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/history/TransitionType
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dies beschreibt, wie der Browser zu einer bestimmten Seite navigierte. Zum Beispiel bedeutet "link", dass der Browser zur Seite navigierte, weil der Benutzer auf einen Link geklickt hat.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- "link"
  - : Der Benutzer klickte auf einen Link auf einer anderen Seite.
- "typed"
  - : Der Benutzer gab die URL in die Adressleiste ein. Dies wird auch verwendet, wenn der Benutzer anfängt, in die Adressleiste zu tippen und dann eine URL aus den angebotenen Vorschlägen auswählt. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer klickte auf ein Lesezeichen oder einen Eintrag im Browserverlauf.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrem Elternteil geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die als explizite Benutzeraktion geladen werden. Das Laden eines solchen iframes erzeugt einen Eintrag in der Vor-/Zurück-Navigation.
- "generated"
  - : Der Benutzer begann, in die Adressleiste zu tippen, und klickte dann auf einen vorgeschlagenen Eintrag, der keine URL enthielt.
- "auto_toplevel"
  - : Die Seite wurde über die Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer sendete ein Formular ab. Beachten Sie, dass in einigen Situationen, wie wenn ein Formular ein Skript zum Absenden seines Inhalts verwendet, das Absenden eines Formulars nicht zu diesem Ubergangstyp führt.
- "reload"
  - : Der Benutzer lud die Seite neu, entweder über die Neuladen-Schaltfläche oder durch Drücken der Eingabetaste in der Adressleiste. Dies wird auch für Sitzungswiederherstellungen und das Wiederöffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde mit einer vom Benutzer konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) erzeugt.
- "keyword_generated"
  - : Entspricht einem für ein Schlüsselwort erzeugten Besuch.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#type-TransitionType) API von Chromium. Diese Dokumentation ist aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code abgeleitet.
