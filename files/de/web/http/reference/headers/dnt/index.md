---
title: DNT header
short-title: DNT
slug: Web/HTTP/Reference/Headers/DNT
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).

Der HTTP-**`DNT`**-({{Glossary("request_header", "Request-Header")}}) gibt die Tracking-Präferenz des Nutzers an. Er ermöglicht es Nutzern anzugeben, ob sie Privatsphäre statt personalisierter Inhalte bevorzugen.

DNT ist zugunsten der [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, die mithilfe des {{HTTPHeader("Sec-GPC")}}-Headers an Server übermittelt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
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

- `0`
  - : Der Nutzer erlaubt das Tracking auf der Zielseite.
- `1`
  - : Der Nutzer bevorzugt es, nicht auf der Zielseite getrackt zu werden.
- `null`
  - : Der Nutzer hat keine Präferenz bezüglich des Trackings angegeben.

## Beispiele

### Lesen des Do Not Track-Status aus JavaScript

Die DNT-Präferenz des Nutzers kann auch über JavaScript mit der [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft ausgelesen werden:

```js
navigator.doNotTrack; // "0", "1" or null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://w3c.github.io/dnt/drafts/tracking-dnt.html#dnt-header-field)-Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- {{HTTPHeader("Tk")}}-Header
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- DNT-Browserhilfe:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
