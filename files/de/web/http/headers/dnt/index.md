---
title: DNT
slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) für weitere Informationen.

Der **`DNT`** (**D**o **N**ot **T**rack)-Anforderungsheader gibt die Tracking-Präferenz des Benutzers an. Er ermöglicht es Benutzern, anzugeben, ob sie Privatsphäre gegenüber personalisierten Inhalten bevorzugen.

DNT ist zugunsten des [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, welches an Server mittels des {{HTTPHeader("Sec-GPC")}}-Headers übermittelt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Benutzer zieht es vor, auf der Zielseite Tracking zu erlauben.
- 1
  - : Der Benutzer zieht es vor, auf der Zielseite nicht verfolgt zu werden.
- null
  - : Der Benutzer hat keine Präferenz bezüglich Tracking angegeben.

## Beispiele

### Do Not Track-Status aus JavaScript lesen

Die DNT-Präferenz des Benutzers kann auch in JavaScript über die [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft ausgelesen werden:

```js
navigator.doNotTrack; // "0", "1" or null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dnt-header-field)-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- {{HTTPHeader("Tk")}}-Header
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- Hilfe zu DNT-Browsereinstellungen:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
