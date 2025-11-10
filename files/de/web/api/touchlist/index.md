---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: 36761819df2ebdd4e3dcc9ae6007029dec71fac0
---

{{APIRef("Touch Events")}}

Das **`TouchList`**-Interface repräsentiert eine Liste von Kontaktpunkten auf einer Berührungsoberfläche. Wenn beispielsweise der Nutzer drei Finger auf der Berührungsoberfläche (wie einem Bildschirm oder Trackpad) hat, würde das entsprechende `TouchList`-Objekt ein [`Touch`](/de/docs/Web/API/Touch)-Objekt für jeden Finger haben, insgesamt also drei Einträge.

Dieses Interface war ein [Versuch, eine nicht modifizierbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um bereits existierenden Code nicht zu brechen. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken auf deren Verwendung aufgebracht werden (z.B. indem deren Elemente als schreibgeschützt behandelt werden).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `TouchList` vermeiden sollten. Sie erstellen `TouchList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig bei den semantischen Unterschieden zu einem echten Array.

## Instanzeigenschaften

- [`TouchList.length`](/de/docs/Web/API/TouchList/length) {{ReadOnlyInline}}
  - : Die Anzahl der [`Touch`](/de/docs/Web/API/Touch)-Objekte in der `TouchList`.

## Instanzmethoden

- [`TouchList.item()`](/de/docs/Web/API/TouchList/item)
  - : Gibt das [`Touch`](/de/docs/Web/API/Touch)-Objekt am angegebenen Index in der Liste zurück.

## Beispiel

Siehe das [Beispiel im Hauptartikel über Touch-Ereignisse](/de/docs/Web/API/Touch_events#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`Document.createTouchList()`](/de/docs/Web/API/Document/createTouchList)
