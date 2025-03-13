---
title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), das den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`** {{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der für die entsprechende Anfrage gilt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : In Arbeit. Der Ursprungsserver testet derzeit seine Kommunikation des
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status
    zu bestimmen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server fungiert als Gateway zu einem Austausch,
    der mehrere Parteien umfasst.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Zustimmung. Der Ursprungsserver glaubt, dass er eine vorherige
    Zustimmung zum Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat.
- `P`
  - : Potentielle Zustimmung. Der Ursprungsserver weiß nicht in Echtzeit, ob er eine
    vorherige Zustimmung zum Tracking dieses Benutzers, Benutzeragenten oder Geräts
    erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder weiterzugeben,
    bis eine solche Zustimmung feststeht, und verspricht weiterhin, innerhalb von 48
    Stunden alle empfangenen `DNT:1`-Daten zu löschen oder dauerhaft zu deidentifizieren,
    für die keine solche Zustimmung vorliegt.
- `D`
  - : Ignoriert DNT. Der Ursprungsserver ist nicht in der Lage oder willens, eine
    vom anfordernden Benutzeragenten empfangene Tracking-Präferenz zu respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des Tracking-Status,
    der für diesen Benutzer, Benutzeragenten oder dieses Gerät gilt.

## Beispiele

Ein `Tk`-Header für eine Ressource, die behauptet, kein Tracking durchzuführen, würde wie folgt aussehen:

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
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
