---
title: Tk header
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), das Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`** {{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der für die entsprechende Anfrage gilt.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
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
  - : Gateway oder mehrere Parteien. Der Server agiert als Gateway zu einem Austausch,
    der mehrere Parteien umfasst.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Zustimmung. Der Ursprungsserver glaubt, dass er eine vorherige
    Zustimmung für das Tracking dieses Benutzers, User-Agents oder Geräts erhalten hat.
- `P`
  - : Potenzielle Zustimmung. Der Ursprungsserver weiß nicht in Echtzeit, ob er eine
    vorherige Zustimmung für das Tracking dieses Benutzers, User-Agents oder Geräts
    erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder
    weiterzugeben, bis eine solche Zustimmung festgestellt wurde, und verspricht
    weiterhin, alle empfangenen `DNT:1`-Daten innerhalb von 48 Stunden zu löschen
    oder dauerhaft zu de-identifizieren, für die eine solche Zustimmung nicht
    erhalten wurde.
- `D`
  - : Missachtung von DNT. Der Ursprungsserver ist nicht in der Lage oder nicht
    bereit, eine von der anfragenden Benutzer-Agent empfangene
    Tracking-Präferenz zu respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des
    Tracking-Status, der für diesen Benutzer, User-Agent oder dieses Gerät gilt.

## Beispiele

Ein `Tk`-Header für eine Ressource, die behauptet, nicht zu tracken, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

{{specifications}}

## Browser-Kompatibilität

Dieser Antwort-Header löst kein Browser-Verhalten aus, daher ist die Browser-Kompatibilität irrelevant.

## Siehe auch

- {{HTTPHeader("DNT")}}-Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
