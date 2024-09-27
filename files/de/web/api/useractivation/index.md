---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die **`UserActivation`**-Schnittstelle liefert Informationen darüber, ob ein Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.

Diese API ist nur im Fensterkontext verfügbar und wird nicht für Worker bereitgestellt.

## Instanzeigenschaften

- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine dauerhafte Benutzeraktivierung hat.
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive) {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine vorübergehende Benutzeraktivierung hat.

## Beschreibung

Ein Objekt dieses Typs wird über die [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation)-Eigenschaft aufgerufen und kann verwendet werden, um Informationen über den Benutzeraktivierungsstatus eines Fensters abzufragen.

Eine Benutzeraktivierung bedeutet entweder, dass der Benutzer derzeit mit der Seite interagiert, oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.
Eine Benutzeraktivierung kann durch einen Button-Klick, einen Zeiger-Touch oder eine andere Benutzerinteraktion mit der Seite ausgelöst werden.

Es gibt zwei Arten von Benutzeraktivierungszuständen für Fenster:

- [Vorübergehende Aktivierung](/de/docs/Glossary/Transient_activation) (der Benutzer interagiert derzeit mit der Seite) und
- [Dauerhafte Aktivierung](/de/docs/Glossary/Sticky_activation) (der Benutzer hat mindestens einmal seit dem Laden der Seite interagiert).

Siehe [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation) für weitere Informationen und eine Liste von APIs, die entweder eine dauerhafte oder vorübergehende Benutzeraktivierung erfordern.

## Beispiele

### Überprüfung, ob kürzlich eine Benutzeraktion ausgeführt wurde

Nutzen Sie [`navigator.userActivation`](/de/docs/Web/API/Navigator/userActivation), um auf das `UserActivation`-Objekt zuzugreifen, und dann [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive), um zu prüfen, ob der Benutzer derzeit mit der Seite interagiert ([Vorübergehende Aktivierung](/de/docs/Glossary/Transient_activation)).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Überprüfung, ob jemals eine Benutzeraktion ausgeführt wurde

Nutzen Sie [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um zu prüfen, ob der Benutzer jemals mit der Seite interagiert hat ([Dauerhafte Aktivierung](/de/docs/Glossary/Sticky_activation)).

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
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
