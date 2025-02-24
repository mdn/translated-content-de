---
title: DNT
slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) für weitere Informationen.

Der HTTP-**`DNT`** (Do Not Track) {{Glossary("request_header", "Request-Header")}} zeigt die Tracking-Präferenz des Nutzers an. Er ermöglicht es Nutzern anzugeben, ob sie Privatsphäre gegenüber personalisierten Inhalten bevorzugen.

DNT ist zugunsten der [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, die Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt und von Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) abgerufen wird.

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
  - : Der Nutzer bevorzugt es, das Tracking auf der Zielseite zuzulassen.
- `1`
  - : Der Nutzer wünscht nicht, auf der Zielseite getrackt zu werden.
- `null`
  - : Der Nutzer hat keine Präferenz bezüglich der Nachverfolgung angegeben.

## Beispiele

### Lesen des Do Not Track-Status von JavaScript

Die DNT-Präferenz des Nutzers kann auch mit JavaScript über die [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft ausgelesen werden:

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
- [DNT auf der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- DNT-Browser-Einstellungs-Hilfe:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Aktivieren von GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
