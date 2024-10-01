---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Das **`UserActivation`**-Interface bietet Informationen darüber, ob ein Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.

Diese API ist nur im Fensterkontext verfügbar und wird nicht in Worker-Umgebungen offengelegt.

## Instanz-Eigenschaften

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine dauerhafte Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine vorübergehende Benutzeraktivierung hat.

## Beschreibung

Ein Objekt dieses Typs wird über die Eigenschaft [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation) abgerufen und kann verwendet werden, um Informationen über den Benutzeraktivierungszustand eines Fensters abzufragen.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert, oder dass er seit dem Laden der Seite eine Interaktion abgeschlossen hat.
Die Benutzeraktivierung kann durch einen Klick auf eine Schaltfläche, eine Berührung mit dem Zeiger oder eine andere Benutzerinteraktion mit der Seite ausgelöst werden.

Es gibt zwei Arten von Benutzeraktivierungszuständen im Fenster:

- {{Glossary("Transient_activation", "Vorübergehende Aktivierung")}} (der Benutzer interagiert derzeit mit der Seite) und
- {{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}} (der Benutzer hat mindestens einmal seit dem Seitenaufruf interagiert).

Weitere Informationen und eine Liste von APIs, die entweder eine dauerhafte oder vorübergehende Benutzeraktivierung erfordern, finden Sie unter [Features, die durch Benutzeraktivierung gesperrt sind](/de/docs/Web/Security/User_activation).

## Beispiele

### Überprüfen, ob kürzlich eine Benutzerinteraktion stattgefunden hat

Verwenden Sie [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation), um auf das `UserActivation`-Objekt zuzugreifen, und dann [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive), um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert ({{Glossary("Transient_activation", "Vorübergehende Aktivierung")}}).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Überprüfen, ob jemals eine Benutzerinteraktion stattgefunden hat

Verwenden Sie [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um zu überprüfen, ob der Benutzer jemals mit der Seite interagiert hat ({{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}}).

```js
if (navigator.userActivation.hasBeenActive) {
  // proceed with auto-playing an animation, for example
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)
- [Features, die durch Benutzeraktivierung gesperrt sind](/de/docs/Web/Security/User_activation)
