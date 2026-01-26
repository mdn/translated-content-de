---
title: Tk header
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) für weitere Informationen.
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), das mittels des {{HTTPHeader("Sec-GPC")}}-Headers an Server kommuniziert wird und für Clients von [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP-**`Tk`**-{{Glossary("response_header", "Antwortheader")}} gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
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
  - : Im Aufbau. Der Ursprungsserver testet derzeit seine Kommunikation des
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt weitere Informationen, um den Tracking-Status zu bestimmen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server fungiert als Gateway zu einem Austausch
    mit mehreren Parteien.
- `N`
  - : Nicht verfolgen.
- `T`
  - : Verfolgen.
- `C`
  - : Verfolgen mit Einwilligung. Der Ursprungsserver glaubt, eine vorherige Einwilligung für
    das Verfolgen dieses Benutzers, Benutzeragenten oder Geräts erhalten zu haben.
- `P`
  - : Potenzielle Einwilligung. Der Ursprungsserver weiß nicht in Echtzeit, ob er eine
    vorherige Einwilligung zum Verfolgen dieses Benutzers, Benutzeragenten oder Geräts erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder weiterzugeben, bis diese Einwilligung festgestellt wurde, und verspricht außerdem, innerhalb von 48 Stunden alle empfangenen `DNT:1`-Daten zu löschen oder dauerhaft zu anonymisieren, für die eine solche Einwilligung nicht erhalten wurde.
- `D`
  - : Missachtung von DNT. Der Ursprungsserver ist nicht in der Lage oder will nicht eine
    vom anfragenden Benutzeragenten empfangene Tracking-Präferenz respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des auf diesen Benutzer, Benutzeragenten oder das Gerät anwendbaren Tracking-Status.

## Beispiele

Ein `Tk`-Header für eine Ressource, die behauptet, nicht zu verfolgen, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

{{specifications}}

## Browser-Kompatibilität

Dieser Antwortheader löst kein Browserverhalten aus, sodass die Browser-Kompatibilität irrelevant ist.

## Siehe auch

- {{HTTPHeader("DNT")}}-Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [Was bedeutet das "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [Aktivieren von GPC in Firefox](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
