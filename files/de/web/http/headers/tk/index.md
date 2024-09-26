---
title: Tk
slug: Web/HTTP/Headers/Tk
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Siehe {{domxref("Navigator.doNotTrack")}} für weitere Informationen.

Der **`Tk`** Antwort-Header zeigt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

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
Tk: !  (im Aufbau)
Tk: ?  (dynamisch)
Tk: G  (Gateway oder mehrere Parteien)
Tk: N  (kein Tracking)
Tk: T  (Tracking)
Tk: C  (Tracking mit Zustimmung)
Tk: P  (potenzielle Zustimmung)
Tk: D  (DNT ignorieren)
Tk: U  (aktualisiert)
```

### Direktiven

- !
  - : Im Aufbau. Der Ursprungsserver testet derzeit die Kommunikation seines Tracking-Status.
- ?
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status zu bestimmen.
- G
  - : Gateway oder mehrere Parteien. Der Server dient als Gateway zu einem Austausch, der mehrere Parteien umfasst.
- N
  - : Kein Tracking.
- T
  - : Tracking.
- C
  - : Tracking mit Zustimmung. Der Ursprungsserver glaubt, dass er eine vorherige Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat.
- P
  - : Potenzielle Zustimmung. Der Ursprungsserver weiß nicht in Echtzeit, ob er eine vorherige Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat, verspricht jedoch, keine `DNT:1`-Daten zu verwenden oder zu teilen, bis eine solche Zustimmung festgestellt wurde und verspricht weiter, alle empfangenen `DNT:1`-Daten, für die eine solche Zustimmung nicht erhalten wurde, innerhalb von 48 Stunden zu löschen oder dauerhaft zu anonymisieren.
- D
  - : DNT ignorieren. Der Ursprungsserver ist nicht in der Lage oder nicht bereit, eine von der anfragenden Benutzeragentur übermittelte Tracking-Präferenz zu beachten.
- U
  - : Aktualisiert. Die Anfrage führte zu einer potenziellen Änderung des Tracking-Status, der auf diesen Benutzer, Benutzeragenten oder dieses Gerät anwendbar ist.

## Beispiele

Ein `Tk` Header für eine Ressource, die behauptet, kein Tracking durchzuführen, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#response-header-field) Spezifikation.

## Siehe auch

- {{HTTPHeader("DNT")}} Header
- {{domxref("Navigator.doNotTrack")}}
