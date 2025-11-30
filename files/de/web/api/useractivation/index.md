---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Das **`UserActivation`**-Interface bietet Informationen darüber, ob ein Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.

Diese API ist nur im Fensterkontext verfügbar und nicht für Worker zugänglich.

## Instanz-Eigenschaften

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine dauerhafte Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine vorübergehende Benutzeraktivierung hat.

## Beschreibung

Ein Objekt dieses Typs wird über die [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)-Eigenschaft aufgerufen und kann verwendet werden, um Informationen über den Benutzeraktivierungszustand eines Fensters abzufragen.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat. Eine Benutzeraktivierung kann durch einen Klick auf eine Schaltfläche, Berühren mit dem Zeiger oder eine andere Nutzerinteraktion mit der Seite ausgelöst werden.

Es gibt zwei Arten von Benutzeraktivierungszuständen für Fenster:

- {{Glossary("Transient_activation", "Vorübergehende Aktivierung")}} (Benutzer interagiert derzeit mit der Seite) und
- {{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}} (Benutzer hat mindestens einmal seit dem Laden der Seite interagiert).

Weitere Informationen und eine Liste von APIs, die eine dauerhafte oder vorübergehende Benutzeraktivierung erfordern, finden Sie unter [Features gated by user activation](/de/docs/Web/Security/Defenses/User_activation).

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion durchgeführt wurde

Verwenden Sie [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation), um auf das `UserActivation`-Objekt zuzugreifen, und dann [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive), um zu prüfen, ob der Benutzer derzeit mit der Seite interagiert ({{Glossary("Transient_activation", "Vorübergehende Aktivierung")}}).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Überprüfen, ob jemals eine Benutzeraktion durchgeführt wurde

Verwenden Sie [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um zu prüfen, ob der Benutzer jemals mit der Seite interagiert hat ({{Glossary("Sticky_activation", "Dauerhafte Aktivierung")}}).

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
- [Features gated by user activation](/de/docs/Web/Security/Defenses/User_activation)
