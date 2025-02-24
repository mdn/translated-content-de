---
title: Tk
slug: Web/HTTP/Headers/Tk
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) für weitere Informationen.
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), die an Server mithilfe des {{HTTPHeader("Sec-GPC")}}-Headers übermittelt wird und auf Client-Seite unter [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP-**`Tk`**-{{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Nicht erlaubter Anfrage-Header")}}</th>
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
  - : Im Aufbau. Der Ursprungsserver testet aktuell seine Kommunikation des
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status zu bestimmen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server agiert als Gateway für einen Austausch
    mit mehreren Parteien.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Einwilligung. Der Ursprungsserver geht davon aus, dass er eine vorherige Einwilligung für
    das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat.
- `P`
  - : Potentielle Einwilligung. Der Ursprungsserver weiß in Echtzeit nicht, ob er
    eine vorherige Einwilligung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder zu teilen, bis eine solche Einwilligung festgestellt wurde,
    und verspricht weiterhin, innerhalb von 48 Stunden alle `DNT:1`-Daten zu löschen oder dauerhaft zu anonymisieren, für die eine solche Einwilligung nicht erhalten wurde.
- `D`
  - : DNT wird ignoriert. Der Ursprungsserver kann oder will eine empfangene Tracking-
    Präferenz des anfragenden Benutzeragenten nicht respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer möglichen Änderung des Tracking-Status,
    der für diesen Benutzer, Benutzeragenten oder dieses Gerät gilt.

## Beispiele

Ein `Tk`-Header für eine Ressource, die vorgibt, nicht zu tracken, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

{{specifications}}

## Siehe auch

- {{HTTPHeader("DNT")}}-Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Aktivieren von GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
