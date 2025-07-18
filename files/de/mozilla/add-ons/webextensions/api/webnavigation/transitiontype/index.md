---
title: webNavigation.TransitionType
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/TransitionType
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ursache der Navigation: zum Beispiel, der Benutzer hat auf einen Link geklickt, eine Adresse eingegeben oder ein Lesezeichen angeklickt.

Beachten Sie, dass viele Werte hier derzeit nicht in Firefox unterstützt werden: Details finden Sie in der [Browser-Kompatibilitätstabelle](#browser-kompatibilität).

## Typ

Werte dieses Typs sind Zeichenfolgen. Mögliche Werte sind:

- "link"
  - : Der Benutzer hat auf einen Link in einer anderen Seite geklickt.
- "typed"
  - : Der Benutzer hat die URL in die Adressleiste eingegeben. Dies wird auch verwendet, wenn der Benutzer begonnen hat, in die Adressleiste zu tippen und dann eine URL aus den angebotenen Vorschlägen ausgewählt hat. Siehe auch "generated".
- "auto_bookmark"
  - : Der Benutzer hat auf ein Lesezeichen oder ein Element im Browserverlauf geklickt.
- "auto_subframe"
  - : Alle verschachtelten iframes, die automatisch von ihrem übergeordneten Element geladen werden.
- "manual_subframe"
  - : Alle verschachtelten iframes, die als explizite Benutzeraktion geladen werden. Das Laden eines solchen iframes wird einen Eintrag in der Vor-/Zurück-Navigationsliste erzeugen.
- "generated"
  - : Der Benutzer hat angefangen, in der Adressleiste zu tippen, und dann auf einen vorgeschlagenen Eintrag geklickt, der keine URL enthielt.
- "start_page"
  - : Die Seite wurde der Befehlszeile übergeben oder ist die Startseite.
- "form_submit"
  - : Der Benutzer hat ein Formular abgeschickt. Beachten Sie, dass in einigen Situationen, wie wenn ein Formular ein Skript verwendet, um seine Inhalte abzusenden, das Absenden eines Formulars nicht zu diesem Übergangstyp führt.
- "reload"
  - : Der Benutzer hat die Seite neu geladen, entweder mit der Neu laden-Schaltfläche oder durch Drücken der Eingabetaste in der Adressleiste. Dies wird auch für die Sitzungswiederherstellung und das Wiederöffnen geschlossener Tabs verwendet.
- "keyword"
  - : Die URL wurde aus einer vom Benutzer konfigurierten [Schlüsselwortsuche](https://support.mozilla.org/en-US/kb/how-search-from-address-bar) generiert.
- "keyword_generated"
  - : Entspricht einem Besuch, der für ein Schlüsselwort generiert wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der `chrome.webNavigation` API von Chromium. Diese Dokumentation wird von [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code abgeleitet.
