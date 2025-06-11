---
title: Tk header
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), das über den {{HTTPHeader("Sec-GPC")}}-Header an Server übermittelt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`** {{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Tk: !  (under construction)
Tk: ?  (dynamic)
Tk: G  (gateway or multiple parties)
Tk: N  (not tracking)
Tk: T  (tracking)
Tk: C  (tracking with consent)
Tk: P  (potential consent)
Tk: D  (disregarding DNT)
Tk: U  (updated)
```

### Direktiven

- `!`
  - : In Bearbeitung. Der Ursprungsserver testet derzeit die Kommunikation seines
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt weitere Informationen, um den
    Tracking-Status festzustellen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server agiert als Gateway für einen Austausch, der
    mehrere Parteien betrifft.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Einwilligung. Der Ursprungsserver geht davon aus, dass er eine
    vorherige Einwilligung für das Tracking dieses Benutzers, User-Agents oder Geräts
    erhalten hat.
- `P`
  - : Mögliche Einwilligung. Der Ursprungsserver weiß in Echtzeit nicht, ob er eine
    vorherige Einwilligung für das Tracking dieses Benutzers, User-Agents oder Geräts
    erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder weiterzugeben,
    bis eine solche Einwilligung feststeht, und verspricht weiter, innerhalb von 48 Stunden
    alle empfangenen `DNT:1`-Daten, für die eine solche Einwilligung nicht vorliegt, zu
    löschen oder dauerhaft zu anonymisieren.
- `D`
  - : Missachtung von DNT. Der Ursprungsserver ist nicht in der Lage oder nicht bereit,
    eine Tracking-Präferenz des anfragenden User-Agents zu respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer möglichen Änderung des Tracking-Status,
    der auf diesen Benutzer, User-Agent oder dieses Gerät anwendbar ist.

## Beispiele

Ein `Tk`-Header für eine Ressource, die behauptet, nicht zu tracken, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

{{specifications}}

## Siehe auch

- {{HTTPHeader("DNT")}}-Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet das "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
