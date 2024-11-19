---
title: DNT
slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).

Der HTTP **`DNT`** (Do Not Track) {{Glossary("request_header", "Request-Header")}} zeigt die Tracking-Präferenz des Nutzers an. Er ermöglicht es den Nutzern anzugeben, ob sie Datenschutz gegenüber personalisierten Inhalten bevorzugen.

DNT ist zugunsten von [Global Privacy Control](https://globalprivacycontrol.org/) veraltet. Diese wird den Servern über den {{HTTPHeader("Sec-GPC")}} Header mitgeteilt und ist über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) für Clients zugänglich.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Der Nutzer zieht es vor, das Tracking auf der Zielseite zuzulassen.
- `1`
  - : Der Nutzer zieht es vor, auf der Zielseite nicht verfolgt zu werden.
- `null`
  - : Der Nutzer hat keine Präferenz bezüglich des Trackings angegeben.

## Beispiele

### Lesen des Do Not Track-Status aus JavaScript

Die DNT-Präferenz des Nutzers kann auch über JavaScript mit der
[`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaft ausgelesen werden:

```js
navigator.doNotTrack; // "0", "1" or null
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#dnt-header-field) Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- {{HTTPHeader("Tk")}} Header
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet "Track" bei "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT auf der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- DNT-Browser-Einstellungen Hilfe:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
