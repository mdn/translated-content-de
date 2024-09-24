---
title: "Navigator: userActivation-Eigenschaft"
short-title: userActivation
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`userActivation`**-Eigenschaft der {{domxref("Navigator")}}-Schnittstelle gibt ein {{domxref("UserActivation")}}-Objekt zurück, das Informationen über den Benutzeraktivierungszustand des aktuellen Fensters enthält.

## Wert

Ein {{domxref("UserActivation")}}-Objekt.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion ausgeführt wurde

Verwenden Sie {{domxref("UserActivation.isActive")}}, um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert ({{Glossary("Transient activation")}}).

```js
if (navigator.userActivation.isActive) {
  // z.B. mit dem Abspielen von Medien fortfahren
}
```

### Überprüfen, ob jemals eine Benutzeraktion ausgeführt wurde

Verwenden Sie {{domxref("UserActivation.hasBeenActive")}}, um zu überprüfen, ob der Benutzer jemals mit der Seite interagiert hat ({{Glossary("Sticky activation")}}).

```js
if (navigator.userActivation.hasBeenActive) {
  // z.B. ein Animation automatisch abspielen
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- {{domxref("UserActivation.isActive")}}
- [Funktionen, die von Benutzeraktivierung abhängen](/de/docs/Web/Security/User_activation)
