---
title: TouchList
slug: Web/API/TouchList
l10n:
  sourceCommit: cfa628aedb53a83b315943ef19fa6c73298fb7d5
---

{{APIRef("Touch Events")}}

Die **`TouchList`**-Schnittstelle repräsentiert eine Liste von Berührungspunkten auf einer berührbaren Oberfläche. Wenn der Benutzer beispielsweise drei Finger auf der Oberfläche (wie einem Bildschirm oder Trackpad) hat, würde das entsprechende `TouchList`-Objekt ein {{domxref("Touch")}}-Objekt für jeden Finger enthalten, insgesamt also drei Einträge.

Diese Schnittstelle war ein [Versuch, eine unveränderliche Liste zu erstellen](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) und wird nur weiterhin unterstützt, um bestehenden Code nicht zu brechen, der sie verwendet. Moderne APIs repräsentieren Listenstrukturen mittels Datentypen, die auf JavaScript-[Arrays](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) basieren, womit viele Array-Methoden verfügbar sind und gleichzeitig zusätzliche Semantiken auf ihre Verwendung angewendet werden (wie beispielsweise, dass ihre Elemente schreibgeschützt sind).

Diese historischen Gründe bedeuten nicht, dass Sie als Entwickler `TouchList` meiden sollten. Sie erstellen keine `TouchList`-Objekte selbst, sondern erhalten sie von APIs wie {{domxref("TouchEvent.targetTouches")}}, und diese APIs sind nicht veraltet. Seien Sie jedoch vorsichtig bezüglich der semantischen Unterschiede zu einem echten Array.

## Instanzeigenschaften

- {{domxref("TouchList.length")}} {{ReadOnlyInline}}
  - : Die Anzahl der {{domxref("Touch")}}-Objekte in der `TouchList`.

## Instanzmethoden

- {{domxref("TouchList.item()")}}
  - : Gibt das {{domxref("Touch")}}-Objekt an dem angegebenen Index in der Liste zurück.

## Beispiel

Sehen Sie sich das [Beispiel im Hauptartikel zu den Touch-Ereignissen](/de/docs/Web/API/Touch_events#example) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- {{domxref("Document.createTouchList()")}}
