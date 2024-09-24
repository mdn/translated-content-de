---
title: Tk
slug: Web/HTTP/Headers/Tk
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe {{domxref("Navigator.doNotTrack")}} für weitere Informationen.

Der **`Tk`** Antwort-Header gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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

- !
  - : In Arbeit. Der Ursprungsserver testet derzeit seine Kommunikation des
    Tracking-Status.
- ?
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status
    zu bestimmen.
- G
  - : Gateway oder mehrere Parteien. Der Server agiert als Gateway zu einem Austausch,
    an dem mehrere Parteien beteiligt sind.
- N
  - : Kein Tracking.
- T
  - : Tracking.
- C
  - : Tracking mit Zustimmung. Der Ursprungsserver glaubt, dass er eine vorherige Zustimmung für
    das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat.
- P
  - : Potentielle Zustimmung. Der Ursprungsserver weiß nicht in Echtzeit, ob er
    eine vorherige Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts
    erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder zu teilen, bis eine solche Zustimmung
    festgelegt wurde, und verspricht außerdem, alle empfangenen `DNT:1`-Daten innerhalb von 48 Stunden zu löschen oder dauerhaft zu de-identifizieren, für die eine solche Zustimmung
    nicht erhalten wurde.
- D
  - : Missachtung von DNT. Der Ursprungsserver ist unfähig oder nicht bereit, eine
    Tracking-Präferenz zu respektieren, die vom anfragenden Benutzeragenten erhalten wurde.
- U
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des angewendeten
    Tracking-Status für diesen Benutzer, Benutzeragenten oder dieses Gerät.

## Beispiele

Ein `Tk` Header für eine Ressource, die behauptet, kein Tracking durchzuführen, würde so aussehen:

```http
Tk: N
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#response-header-field) Spezifikation.

## Siehe auch

- {{HTTPHeader("DNT")}} Header
- {{domxref("Navigator.doNotTrack")}}
