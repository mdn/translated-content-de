---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("Touch Events")}}

Die **`TouchList`**-Schnittstelle repräsentiert eine Liste von Kontaktpunkten auf einer Touch-Oberfläche. Zum Beispiel, wenn der Benutzer drei Finger auf der Touch-Oberfläche (wie einem Bildschirm oder Trackpad) hat, würde das entsprechende `TouchList`-Objekt ein [`Touch`](/de/docs/Web/API/Touch)-Objekt für jeden Finger haben, insgesamt drei Einträge.

Diese Schnittstelle war ein [Versuch, eine nicht veränderbare Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird weiterhin unterstützt, um vorhandenen Code nicht zu beeinträchtigen, der sie bereits verwendet. Moderne APIs repräsentieren Listenstrukturen mit Typen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, wodurch viele Array-Methoden verfügbar werden und gleichzeitig zusätzliche Semantiken bei der Verwendung auferlegen (wie etwa das Festlegen ihrer Elemente auf schreibgeschützt).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `TouchList` vermeiden sollten. Sie erstellen `TouchList`-Objekte nicht selbst, sondern erhalten sie von APIs wie [`TouchEvent.targetTouches`](/de/docs/Web/API/TouchEvent/targetTouches), und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig mit den semantischen Unterschieden zu einem echten Array.

## Instanzeigenschaften

- [`TouchList.length`](/de/docs/Web/API/TouchList/length) {{ReadOnlyInline}}
  - : Die Anzahl der [`Touch`](/de/docs/Web/API/Touch)-Objekte in der `TouchList`.

## Instanzmethoden

- [`TouchList.item()`](/de/docs/Web/API/TouchList/item)
  - : Gibt das [`Touch`](/de/docs/Web/API/Touch)-Objekt am angegebenen Index in der Liste zurück.

## Beispiel

Siehe das [Beispiel im Hauptartikel zu Touch-Ereignissen](/de/docs/Web/API/Touch_events#example).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`Document.createTouchList()`](/de/docs/Web/API/Document/createTouchList)
