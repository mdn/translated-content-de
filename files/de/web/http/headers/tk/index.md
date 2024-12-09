---
title: Tk
slug: Web/HTTP/Headers/Tk
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track) Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), die den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`**-{{Glossary("response_header", "Antwortheader")}} gibt den Tracking-Status an, der für die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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
  - : In Arbeit. Der Ursprungsserver testet derzeit die Kommunikation seines
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt weitere Informationen, um den
    Tracking-Status festzustellen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server fungiert als Gateway für einen Austausch,
    der mehrere Parteien umfasst.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Zustimmung. Der Ursprungsserver geht davon aus, dass er eine
    vorherige Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts
    erhalten hat.
- `P`
  - : Potenzielle Zustimmung. Der Ursprungsserver weiß in Echtzeit nicht, ob er eine
    vorherige Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts
    erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder zu teilen, bis diese Zustimmung feststeht,
    und verspricht weiter, innerhalb von 48 Stunden alle empfangenen `DNT:1`-Daten, für die
    keine Zustimmung erhalten wurde, zu löschen oder dauerhaft zu anonymisieren.
- `D`
  - : DNT wird ignoriert. Der Ursprungsserver ist nicht in der Lage oder nicht gewillt,
    eine Tracking-Präferenz vom anfragenden Benutzeragenten zu respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des
    Tracking-Status, der für diesen Benutzer, Benutzeragenten oder dieses Gerät gilt.

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
- [Was bedeutet „Track“ in „Do Not Track“? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
