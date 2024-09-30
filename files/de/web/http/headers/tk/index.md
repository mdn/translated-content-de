---
title: Tk
slug: Web/HTTP/Headers/Tk
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}{{Deprecated_header}}{{non-standard_header}}

> [!NOTE]
> Die DNT (Do Not Track)-Spezifikation wurde eingestellt. Weitere Informationen finden Sie unter [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack).

Der **`Tk`** Antwort-Header gibt den Tracking-Status an, der auf die entsprechende Anfrage angewendet wurde.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
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
  - : In Arbeit. Der Ursprungsserver testet derzeit die Kommunikation seines Tracking-Status.
- ?
  - : Dynamisch. Der Ursprungsserver benötigt mehr Informationen, um den Tracking-Status zu bestimmen.
- G
  - : Gateway oder mehrere Parteien. Der Server agiert als Gateway zu einem Austausch, der mehrere Parteien umfasst.
- N
  - : Kein Tracking.
- T
  - : Tracking.
- C
  - : Tracking mit Zustimmung. Der Ursprungsserver ist der Meinung, bereits eine Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten zu haben.
- P
  - : Potenzielle Zustimmung. Der Ursprungsserver weiß in Echtzeit nicht, ob er bereits eine Zustimmung für das Tracking dieses Benutzers, Benutzeragenten oder Geräts erhalten hat, verspricht jedoch, keine `DNT:1` Daten zu verwenden oder zu teilen, bis eine solche Zustimmung festgestellt wurde, und verspricht außerdem, alle empfangenen `DNT:1` Daten, für die eine solche Zustimmung nicht erhalten wurde, innerhalb von 48 Stunden zu löschen oder dauerhaft zu anonymisieren.
- D
  - : Missachtung von DNT. Der Ursprungsserver ist nicht in der Lage oder nicht willens, eine vom anfragenden Benutzeragenten erhaltene Tracking-Präferenz zu respektieren.
- U
  - : Aktualisiert. Die Anfrage führte zu einer möglichen Änderung des Tracking-Status, der für diesen Benutzer, Benutzeragenten oder dieses Gerät gilt.

## Beispiele

Ein `Tk` Header für eine Ressource, die behauptet, nicht zu tracken, würde folgendermaßen aussehen:

```http
Tk: N
```

## Spezifikationen

Teil der eingestellten [Tracking Preference Expression (DNT)](https://www.w3.org/TR/tracking-dnt/#response-header-field) Spezifikation.

## Siehe auch

- {{HTTPHeader("DNT")}} Header
- [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack)
