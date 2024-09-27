---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ändert die Nachfolger-Beziehung für eine Gruppe von Tabs.

Mithilfe der {{WebExtAPIRef('tabs')}}-API kann einem Tab ein _Nachfolger_-Tab im selben Fenster zugewiesen werden. Wenn Tab B der Nachfolger von Tab A ist und Tab A geschlossen wird, während es das aktive Tab ist, wird Tab B als nächstes aktiviert. Wenn Tab A keinen Nachfolger hat, kann der Browser frei bestimmen, welches Tab als nächstes aktiviert wird. Wenn Tab B der Nachfolger von Tab A ist, wird Tab A als _Vorgänger_ von Tab B bezeichnet. Ein Tab kann höchstens einen Nachfolger haben, aber beliebig viele Vorgänger. Ein Tab kann sich selbst oder ein Tab in einem anderen Fenster nicht als Nachfolger nehmen.

Alle Tabs beginnen ohne Nachfolger; Tabs erhalten nur dann einen Nachfolger, wenn sie von einer WebExtension zugewiesen werden. Der Browser darf jedoch, wenn möglich, ein Tab in einer Nachfolger-Beziehung mit anderen Tabs nicht verwaisen lassen: Wenn Tab B der Nachfolger von Tab A ist und Tab C der Nachfolger von Tab B ist, und B geschlossen wird (oder in ein anderes Fenster verschoben wird), dann wird Tab A Tab C als Nachfolger nehmen. Diesen Vorgang, bei dem C nicht auf diese Weise verwaist wird, nennt man _Verschieben eines Tabs_ (B) _aus seiner Nachfolgerlinie_.

`tabs.moveInSuccession()` nimmt ein Array von Tab-IDs und verschiebt alle diese Tabs aus ihren Nachfolgerlinien. Es macht dann jedes Tab zum Nachfolger des vorherigen Tabs im Array und bildet eine Kette. Optional kann der Nachfolger des letzten Tabs in der Kette auf ein Anker-Tab gesetzt werden, das nicht aus seiner Nachfolgerlinie verschoben wird. Zusätzliche Optionen können steuern, ob die Tab-Kette an das Anker-Tab "vorgehängt" oder "angehängt" wird und ob der Vorgang wie eine verkettete Listen-Einfügung wirkt.

Obwohl der Nachfolger-Tab mit {{WebExtAPIRef('tabs.update()')}} zugewiesen werden kann, ist es oft wünschenswert, `tabs.moveInSuccession()` zu verwenden, um Nachfolger zu ändern, selbst wenn nur einem einzigen Tab ein Nachfolger zugewiesen wird. Der Unterschied besteht darin, dass `browser.tabs.moveInSuccession([a], b)` Tab `a` aus seiner Nachfolgerlinie bewegt, sodass alle Vorgänger von `a` den vorherigen Nachfolger von `a` übernehmen; während wenn `browser.tabs.update(a, {successorTabId: b})` stattdessen verwendet wird, Tab `a` weiterhin Nachfolger anderer Tabs sein kann, was unerwartet sein könnte. Ein weiterer Vorteil von `tabs.moveInSuccession()` ist, dass alle Nachfolgeränderungen atomar durchgeführt werden, ohne sich Sorgen über Rennbedingungen zwischen Aufrufen von {{WebExtAPIRef('tabs.update()')}} und {{WebExtAPIRef('tabs.get()')}} und anderen Operationen machen zu müssen, wie dem Schließen eines Tabs durch den Benutzer.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameter

- `tabIds`
  - : `array` von `integer`. Ein Array von Tab-`ID`s. Die Reihenfolge der Elemente im Array definiert die Beziehung der Tabs. Alle ungültigen Tab-`ID`s oder Tab-`ID`s, die Tabs entsprechen, die sich nicht im selben Fenster wie `tabId` befinden (oder das erste Tab im Array, wenn `tabId` weggelassen wird), werden ignoriert – sie behalten ihre aktuellen Nachfolger und Vorgänger.
- `tabId` {{optional_inline}}
  - : `integer`. Die `ID` des Tabs, das der Nachfolger des letzten Tabs im `tabIds`-Array sein wird. Wenn diese `ID` ungültig ist oder {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, hat das letzte Tab keinen Nachfolger. Standardwert ist {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}

  - : `object`.

    - `append` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die Tabs in `tabIds` vor oder nach `tabId` in der Nachfolge verschoben werden. Wenn `false`, werden die Tabs vor `tabId` verschoben, wenn `true`, werden die Tabs nach `tabId` verschoben. Standardwert ist `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die aktuellen Vorgänger oder Nachfolger (abhängig von `options.append`) von `tabId` mit der anderen Seite der Kette verknüpft werden, nachdem sie vor- oder nachgehängt wurden. Wenn true, passiert eines der folgenden: wenn `options.append` `false` ist, wird das erste Tab im Array als Nachfolger aller aktuellen Vorgänger von `tabId` festgelegt; wenn `options.append` `true` ist, wird der aktuelle Nachfolger von tabId als Nachfolger des letzten Tabs im Array festgelegt. Standardwert ist `false`.

## Browser-Kompatibilität

{{Compat}}
