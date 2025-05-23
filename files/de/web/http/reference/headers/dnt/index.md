---
title: DNT header
short-title: DNT
slug: Web/HTTP/Reference/Headers/DNT
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) für weitere Informationen.

Der HTTP **`DNT`** (Do Not Track) {{Glossary("request_header", "Request-Header")}} zeigt die Tracking-Vorlieben des Benutzers an.
Er ermöglicht es Benutzern anzugeben, ob sie eher Datenschutz als personalisierte Inhalte bevorzugen.

DNT ist zugunsten von [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, das den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und von Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

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
  - : Der Benutzer zieht es vor, das Tracking auf der Zielseite zuzulassen.
- `1`
  - : Der Benutzer zieht es vor, nicht auf der Zielseite getrackt zu werden.
- `null`
  - : Der Benutzer hat keine Präferenz bezüglich des Trackings angegeben.

## Beispiele

### Lesen des Do Not Track-Status aus JavaScript

Die DNT-Präferenz des Benutzers kann auch aus JavaScript über die
[`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)-Eigenschaft gelesen werden:

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
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- Hilfe zu DNT-Browsereinstellungen:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Aktivieren von GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
