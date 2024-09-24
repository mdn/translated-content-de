---
title: UserActivation
slug: Web/API/UserActivation
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die **`UserActivation`**-Schnittstelle bietet Informationen darüber, ob ein Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.

Diese API ist nur im Fensterkontext verfügbar und wird nicht für Arbeiter freigegeben.

## Instanzeigenschaften

- {{domxref("UserActivation.hasBeenActive")}} {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine persistente Benutzeraktivierung hat.
- {{domxref("UserActivation.isActive")}} {{ReadOnlyInline}}
  - : Gibt an, ob das aktuelle Fenster eine vorübergehende Benutzeraktivierung hat.

## Beschreibung

Ein Objekt dieses Typs wird über die Eigenschaft {{domxref("navigator.userActivation")}} aufgerufen und kann verwendet werden, um Informationen über den Benutzeraktivierungsstatus eines Fensters zu erfragen.

Eine Benutzeraktivierung impliziert entweder, dass der Benutzer derzeit mit der Seite interagiert oder seit dem Laden der Seite eine Interaktion abgeschlossen hat.
Eine Benutzeraktivierung kann durch einen Button-Klick, eine Zeigergeste oder eine andere Benutzerinteraktion mit der Seite ausgelöst werden.

Es gibt zwei Arten von Benutzeraktivierungszuständen für Fenster:

- {{Glossary("Vorübergehende Aktivierung")}} (Benutzer interagiert derzeit mit der Seite) und
- {{Glossary("Persistente Aktivierung")}} (Benutzer hat seit dem Laden der Seite mindestens einmal interagiert).

Siehe [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation) für weitere Informationen und eine Liste von APIs, die entweder persistente oder vorübergehende Benutzeraktivierung erfordern.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion durchgeführt wurde

Verwenden Sie {{domxref("navigator.userActivation")}}, um das `UserActivation`-Objekt zuzugreifen, und dann {{domxref("UserActivation.isActive")}}, um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert ({{Glossary("Vorübergehende Aktivierung")}}).

```js
if (navigator.userActivation.isActive) {
  // gehen Sie beispielsweise vor, um das Abspielen von Medien anzufordern
}
```

### Überprüfen, ob jemals eine Benutzeraktion durchgeführt wurde

Verwenden Sie {{domxref("UserActivation.hasBeenActive")}}, um zu überprüfen, ob der Benutzer jemals mit der Seite interagiert hat ({{Glossary("Persistente Aktivierung")}}).

```js
if (navigator.userActivation.hasBeenActive) {
  // fahren Sie beispielsweise mit dem automatischen Abspielen einer Animation fort
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator.userActivation")}}
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
