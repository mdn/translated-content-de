---
title: Tk header
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), die Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`** {{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

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
  - : Im Aufbau. Der ursprüngliche Server testet derzeit seine Kommunikation des
    Tracking-Status.
- `?`
  - : Dynamisch. Der ursprüngliche Server benötigt mehr Informationen, um den Tracking-Status zu bestimmen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server fungiert als Gateway für einen Austausch,
    der mehrere Parteien umfasst.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Zustimmung. Der ursprüngliche Server glaubt, dass er eine vorherige Zustimmung für
    das Tracking dieses Nutzers, User-Agents oder Geräts erhalten hat.
- `P`
  - : Potenzielle Zustimmung. Der ursprüngliche Server weiß nicht in Echtzeit, ob er eine
    vorherige Zustimmung für das Tracking dieses Nutzers, User-Agents oder Geräts erhalten hat, verspricht jedoch, keine `DNT:1` Daten zu verwenden oder zu teilen, bis eine solche Zustimmung festgestellt wurde, und verspricht weiter, innerhalb von 48 Stunden Daten, für die keine Zustimmung erhalten wurde, zu löschen oder dauerhaft zu anonymisieren.
- `D`
  - : Ignoriert DNT. Der ursprüngliche Server ist nicht in der Lage oder nicht bereit, eine erhaltene Tracking-Präferenz des anfragenden User-Agents zu respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des Tracking-Status,
    der auf diesen Nutzer, User-Agent oder dieses Gerät anwendbar ist.

## Beispiele

Ein `Tk`-Header für eine Ressource, die behauptet, kein Tracking durchzuführen, könnte folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

{{specifications}}

## Siehe auch

- {{HTTPHeader("DNT")}}-Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
