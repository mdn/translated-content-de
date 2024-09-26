---
title: DNT
slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT- (Do Not Track) Spezifikation wurde eingestellt. Siehe {{domxref("Navigator.doNotTrack")}} für weitere Informationen.

Der **`DNT`** (**D**o **N**ot
**T**rack) Anfrage-Header signalisiert die Tracking-Präferenz des Benutzers. Er ermöglicht es
Benutzern anzugeben, ob sie Privatsphäre gegenüber personalisierten Inhalten bevorzugen.

DNT ist zugunsten der [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, die den Servern über den {{HTTPHeader("Sec-GPC")}} Header mitgeteilt wird und für Clients über {{domxref("navigator.globalPrivacyControl")}} zugänglich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
DNT: 0
DNT: 1
DNT: null
```

## Direktiven

- 0
  - : Der Benutzer zieht es vor, Tracking auf der Zielseite zu erlauben.
- 1
  - : Der Benutzer zieht es vor, nicht auf der Zielseite verfolgt zu werden.
- null
  - : Der Benutzer hat keine Präferenz bezüglich des Trackings angegeben.

## Beispiele

### Lesen des Do Not Track-Status mit JavaScript

Die DNT-Präferenz des Benutzers kann auch mit JavaScript über die
{{domxref("Navigator.doNotTrack")}}-Eigenschaft ausgelesen werden:

```js
navigator.doNotTrack; // "0", "1" oder null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dnt-header-field) Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} Header
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet „Track“ in „Do Not Track“? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT auf Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- DNT-Browsereinstellungen Hilfe:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
