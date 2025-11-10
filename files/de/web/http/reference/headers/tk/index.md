---
title: Tk header
short-title: Tk
slug: Web/HTTP/Reference/Headers/Tk
l10n:
  sourceCommit: 9b17bed67d318be03edfd29c0d3e3cf3efcb3618
---

{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT- (Do Not Track) Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).
> Eine Alternative ist [Global Privacy Control](https://globalprivacycontrol.org/), die den Servern über den {{HTTPHeader("Sec-GPC")}}-Header mitgeteilt wird und für Clients über [`navigator.globalPrivacyControl`](/de/docs/Web/API/Navigator/globalPrivacyControl) zugänglich ist.

Der HTTP **`Tk`** {{Glossary("response_header", "Antwort-Header")}} gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : In Arbeit. Der Ursprungsserver testet derzeit die Kommunikation seines
    Tracking-Status.
- `?`
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status zu bestimmen.
- `G`
  - : Gateway oder mehrere Parteien. Der Server fungiert als Gateway zu einem Austausch,
    an dem mehrere Parteien beteiligt sind.
- `N`
  - : Kein Tracking.
- `T`
  - : Tracking.
- `C`
  - : Tracking mit Zustimmung. Der Ursprungsserver geht davon aus, dass er eine vorherige
    Zustimmung zum Tracking dieses Benutzers, User-Agents oder Geräts erhalten hat.
- `P`
  - : Potenzielle Zustimmung. Der Ursprungsserver weiß nicht in Echtzeit, ob er eine
    vorherige Zustimmung zum Tracking dieses Benutzers, User-Agents oder Geräts erhalten hat, verspricht aber, keine `DNT:1`-Daten zu verwenden oder weiterzugeben, bis eine solche Zustimmung festgestellt wurde, und verspricht weiter, innerhalb von 48 Stunden alle erhaltenen `DNT:1`-Daten zu löschen oder dauerhaft zu de-identifizieren, für die keine solche Zustimmung erhalten wurde.
- `D`
  - : Ignoriert DNT. Der Ursprungsserver kann oder will eine von der anfragenden Benutzer-Agent übermittelte Tracking-Präferenz nicht respektieren.
- `U`
  - : Aktualisiert. Die Anfrage führte zu einer möglichen Änderung des Tracking-Status, der für diesen Benutzer, User-Agent oder dieses Gerät gilt.

## Beispiele

Ein `Tk`-Header für eine Ressource, die angibt, nicht zu tracken, würde folgendermaßen aussehen:

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
- [Was bedeutet das "Track" in "Do Not Track"? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [DNT bei der Electronic Frontier Foundation](https://www.eff.org/issues/do-not-track)
- [GPC - Global Privacy Control](https://globalprivacycontrol.org/)
  - [GPC in Firefox aktivieren](https://support.mozilla.org/en-US/kb/global-privacy-control?as=u&utm_source=inproduct)
