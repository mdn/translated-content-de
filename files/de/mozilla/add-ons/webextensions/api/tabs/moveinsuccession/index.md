---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ändert die Nachfolgereihenfolge für eine Gruppe von Tabs.

Unter Verwendung der {{WebExtAPIRef('tabs')}} API kann einem Tab ein _Nachfolger_-Tab im selben Fenster zugewiesen werden. Wenn Tab B der Nachfolger von Tab A ist und Tab A geschlossen wird, während es aktiv ist, wird Tab B als nächstes aktiviert. Wenn Tab A keinen Nachfolger hat, kann der Browser frei entscheiden, welcher Tab als nächstes aktiviert wird. Wenn Tab B der Nachfolger von Tab A ist, wird Tab A als _Vorgänger_ von Tab B bezeichnet. Ein Tab kann höchstens einen Nachfolger haben, jedoch eine beliebige Anzahl von Vorgängern. Ein Tab kann sich selbst oder einen Tab in einem anderen Fenster nicht als Nachfolger nehmen.

Alle Tabs beginnen ohne Nachfolger; Tabs bekommen nur einen Nachfolger zugewiesen, wenn eine WebExtension dies tut. Der Browser sollte jedoch, soweit möglich, einen Tab in einer Nachfolgerelation zu anderen Tabs nicht verwaisen lassen: Wenn Tab B der Nachfolger von Tab A ist und Tab C der Nachfolger von Tab B ist und B geschlossen wird (oder in ein anderes Fenster verschoben wird), dann wird Tab A Tab C als Nachfolger übernehmen. Dies wird als _Verschieben eines Tabs_ (B) _aus seiner Nachfolgereihe_ bezeichnet, um zu verhindern, dass C verwaist.

`tabs.moveInSuccession()` nimmt ein Array von Tab-IDs und verschiebt alle diese Tabs aus ihren Nachfolgereihen. Es macht dann jeden Tab zum Nachfolger des vorherigen Tabs im Array und bildet eine Kette. Optional kann es den Nachfolger des letzten Tabs in der Kette auf einen Anker-Tab setzen, der _nicht_ aus seiner Nachfolgereihe verschoben wird. Zusätzliche Optionen können steuern, ob die Tab-Kette "vorangestellt" oder "angehängt" an den Anker-Tab wird und ob der Vorgang wie ein verknüpftes Listeneinfügen behandelt wird.

Obwohl der Nachfolger-Tab mit {{WebExtAPIRef('tabs.update()')}} zugewiesen werden kann, ist es oft wünschenswert, `tabs.moveInSuccession()` zu verwenden, um Nachfolger zu ändern, auch wenn nur ein einzelner Tab seinen Nachfolger zugewiesen bekommt. Der Unterschied ist, dass `browser.tabs.moveInSuccession([a], b)` den Tab `a` aus seiner Nachfolgereihe verschiebt, sodass alle Vorgänger von `a` den vorherigen Nachfolger von `a` übernehmen; während wenn `browser.tabs.update(a, {successorTabId: b})` stattdessen verwendet wird, Tab `a` möglicherweise weiterhin der Nachfolger anderer Tabs ist, was unerwartet sein könnte. Ein weiterer Vorteil von `tabs.moveInSuccession()` ist, dass alle Nachfolgeränderungen atomar erfolgen, ohne sich um Konflikte zwischen Aufrufen von {{WebExtAPIRef('tabs.update()')}} und {{WebExtAPIRef('tabs.get()')}} und anderen Vorgängen, wie dem Schließen eines Tabs durch den Benutzer, kümmern zu müssen.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameter

- `tabIds`
  - : `array` von `integer`. Ein Array von Tab-`ID`s. Die Reihenfolge der Elemente im Array definiert das Verhältnis der Tabs. Alle ungültigen Tab-`ID`s oder Tab-`ID`s, die zu Tabs gehören, die nicht im selben Fenster wie `tabId` (oder der erste Tab im Array, falls `tabId` weggelassen wird) sind, werden ignoriert – sie behalten ihre aktuellen Nachfolger und Vorgänger.
- `tabId` {{optional_inline}}
  - : `integer`. Die `ID` des Tabs, der der Nachfolger des letzten Tabs im `tabIds` Array sein wird. Wenn diese `ID` ungültig ist oder {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, wird der letzte Tab keinen Nachfolger haben. Standardwert ist {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}
  - : `object`.
    - `append` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die Tabs in `tabIds` vor oder nach `tabId` in der Nachfolge verschoben werden. Wenn `false`, werden die Tabs vor `tabId` verschoben, wenn `true`, werden die Tabs nach `tabId` verschoben. Standardwert ist `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die aktuellen Vorgänger oder Nachfolger (abhängig von `options.append`) von `tabId` nach dem Voranstellen oder Anhängen mit der anderen Seite der Kette verbunden werden. Wenn `true`, passiert eines der folgenden: wenn `options.append` `false` ist, wird der erste Tab im Array als Nachfolger aller aktuellen Vorgänger von `tabId` festgelegt; wenn `options.append` `true` ist, wird der aktuelle Nachfolger von `tabId` als Nachfolger des letzten Tabs im Array festgelegt. Standardwert ist `false`.

## Browser-Kompatibilität

{{Compat}}
