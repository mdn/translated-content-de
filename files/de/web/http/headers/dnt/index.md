---
title: DNT (Nicht verfolgen)
slug: Web/HTTP/Headers/DNT
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter {{domxref("Navigator.doNotTrack")}}.

Der **`DNT`** (**D**o **N**ot
**T**rack) Anforderungs-Header gibt die Tracking-Präferenz des Nutzers an. Es ermöglicht
den Nutzern anzugeben, ob sie eher Datenschutz als personalisierte Inhalte bevorzugen.

DNT ist zugunsten der [Global Privacy Control](https://globalprivacycontrol.org/) veraltet, die mittels des {{HTTPHeader("Sec-GPC")}} Headers an Server kommuniziert wird und für Clients über {{domxref("navigator.globalPrivacyControl")}} zugänglich ist.

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
  - : Der Nutzer zieht vor, Tracking auf der Zielseite zuzulassen.
- 1
  - : Der Nutzer zieht vor, nicht auf der Zielseite getrackt zu werden.
- null
  - : Der Nutzer hat keine Präferenz bzgl. des Trackings angegeben.

## Beispiele

### Lesen des Do Not Track-Status von JavaScript

Die DNT-Präferenz des Nutzers kann auch über JavaScript mit der
{{domxref("Navigator.doNotTrack")}} Eigenschaft ausgelesen werden:

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
- [Was bedeutet das "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT auf Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- Hilfe zu DNT-Browsereinstellungen:
  - [Firefox](https://support.mozilla.org/en-US/kb/how-do-i-turn-do-not-track-feature)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Aktivieren von GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
