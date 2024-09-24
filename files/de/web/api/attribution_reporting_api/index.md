---
title: Attribution Reporting API
slug: Web/API/Attribution_Reporting_API
l10n:
  sourceCommit: f430d277573ba0b06b1ac33ae8017fd90f170bef
---

```yaml
title: Berichtserstellungs-API
slug: Web/API/Attribution_Reporting_API
page-type: web-api-overview
status:
  - experimental
browser-compat: html.elements.a.attributionsrc
---

{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Attribution Reporting API")}}

Die **Attribution Reporting API** ermöglicht es Entwicklern, Konversionen zu messen — beispielsweise, wenn ein Nutzer auf eine Anzeige klickt — und anschließend Berichte über diese Konversionen zu erstellen. Sie tut dies, ohne dass Cookies von Drittanbietern verwendet werden müssen.

## Konzepte und Nutzung

Werbetreibende messen häufig, wie viele Benutzer ihre Anzeigen ansehen und dann handeln. Dies ermöglicht es zu sehen, welche Anzeigen Platzierungen den größten Erfolg bieten, sodass Anpassungen vorgenommen werden können. Typische Metriken umfassen dabei:

- Anzahl und Details der Benutzerinteraktionen.
- Umsatzquellen.
- Ad-Interaktionen nach Region.

Traditionell wurden diese in Cookies gespeichert. Normalerweise wird dies als problematisch angesehen, da es privat ist. In der Praxis gibt es viele gesetzestechnische Herausforderungen.

Anwendungsfälle sind breit gestreut.

Für mehr Informationen siehe [Registering ad clicks](/de/docs/glossary/click_through_rate).

### Wie funktioniert es?

Veranschaulichen wir das durch folgendes Szenario.

Ein Szenario kann ein Klick auf ein Werbebanner sein, welches ein Produkt präsentiert. Ein solcher Weg wäre, den Kunden zu einem Landing Page zu leiten. Datenschutzgesetze mögen von Region zu Region unterschiedlich sein und möglicherweise Anpassungen benötigen.

![Infografik der Schritte](ara-flow.png)

Die Schritte dazu folgend sind:

1. Wenn ein Benutzer sich registriert, dann…
   - *Eine Attribution wird registriert*.`
   - …
2. Wenn der Nutzer dann zur Webseite geht, wird dort dargestellt:
   - Es gibt X Aufrufe vorangegangen.
   - Konvertierungen werden eventuell tiefer gezogen.
   - Konvertierungen nicht mehr möglich.
   - Am Ende wird die Anzeige als erfolgreich dargestellt.

Ein mögliches Realworld-Szenario:
   - *Der Nutzer klickt auf ein Banner.*
   - Eine durch unterschiedliche Seiten wandert.
3. Auf den ersten/zweiten Schritt folgt immer ein finale Output Verschachtelung.
4. Das Konzept ist identisch mit der Reduktion des Fallens.

Analogien;
   - Seitenweite Registrierung.
   - Mobile Aspekte.

Detaillierte Berichte zu Inhaltsquellen.

Neue Metriken.
   - `TypeScript`
   - `INDOM`
   - `Node-Apps` **(als Ambitionen)**

Für die vollständige Dokumentation siehe:

- **Popup-Interaktionen**.
- **Benutzerskripte**.
   - Service.
- Dienstleistungen.

## Schnittstellen

Keine eigenständigen Schnittstellen, sondern bestehend.

---

Konstelation:
- **Erweiterungskripte:**
- `src`, `attributation=...`, `Button clicks`. 

Metriken:
- `events`, `h2`.

## HTML

Na: 1 Zeile Downtime.

---

## Architektur

Ein zentraler Mechanismus.

Specific Notes:
- Die genaue Spezifikation kann sich unterscheiden.
   - Browser-APIs sind oft schwer einheitlich.

## Einschreibungen

Release-Note ist gebludert.

Service benötigt_cookie-Logik.
Funk`lichkeit:

- 1 Billion.
- *Berichtmanagement* - Einstellungen Enginie, Fokus.

Testintergrund:
- Interaktionen.
Reaktionen.
  ```

Individuelle Implementierungen finden je unterschiedlichen Verwendung.

**Account**:

- Event handling richtig `routes`.

**Solvieren**:
Für weitere Schritten.

Ab. Konvchst.

geschlossen.
Getestet etc.
```
