---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Modifiziert die Nachfolgerbeziehung für eine Gruppe von Tabs.

Mit der {{WebExtAPIRef('tabs')}} API kann einem Tab im gleichen Fenster ein _Nachfolger_-Tab zugewiesen werden. Wenn Tab B der Nachfolger von Tab A ist und Tab A geschlossen wird, während es aktiv ist, wird Tab B als Nächstes aktiviert. Wenn Tab A keinen Nachfolger hat, kann der Browser selbst bestimmen, welches Tab als Nächstes aktiviert wird. Wenn Tab B der Nachfolger von Tab A ist, wird Tab A als _Vorgänger_ von Tab B bezeichnet. Ein Tab kann höchstens einen Nachfolger haben, aber es kann beliebig viele Vorgänger haben. Ein Tab kann sich selbst oder ein Tab in einem anderen Fenster nicht als Nachfolger nehmen.

Alle Tabs beginnen ohne Nachfolger; Tabs bekommen nur dann einen Nachfolger, wenn dieser durch eine WebExtension zugewiesen wird. Der Browser darf jedoch, wenn möglich, ein Tab, das sich in einer Nachfolgerbeziehung mit anderen Tabs befindet, nicht verwaisen lassen: wenn Tab B der Nachfolger von Tab A ist und Tab C der Nachfolger von Tab B ist, und B geschlossen wird (oder in ein anderes Fenster verschoben wird), dann übernimmt Tab A Tab C als Nachfolger. Das Verhindern, dass C auf diese Weise verwaist, wird als _Verschiebung eines Tabs_ (B) _aus seiner Nachfolgelinie_ bezeichnet.

`tabs.moveInSuccession()` nimmt ein Array von Tab-IDs und verschiebt all diese Tabs aus ihren Nachfolgelinien. Anschließend wird jedes Tab zum Nachfolger des vorherigen Tabs im Array, wodurch eine Kette gebildet wird. Optional kann der Nachfolger des letzten Tabs in der Kette auf ein Ankertab gesetzt werden, das _nicht_ aus seiner Nachfolgelinie verschoben wird. Zusätzliche Optionen können steuern, ob die Tab-Kette dem Ankertab "vorgehängt" oder "angehängt" wird und ob die Operation wie ein Verknüpfungslisteneinfügen wirkt.

Obwohl der Nachfolger-Tab mit {{WebExtAPIRef('tabs.update()')}} zugewiesen werden kann, ist es oftmals wünschenswert, `tabs.moveInSuccession()` zu verwenden, um Nachfolger zu ändern, selbst wenn nur für ein einzelnes Tab ein Nachfolger zugewiesen wird. Der Unterschied besteht darin, dass `browser.tabs.moveInSuccession([a], b)` das Tab `a` aus seiner Nachfolgelinie bewegt, sodass alle Vorgänger von `a` den vorherigen Nachfolger von `a` übernehmen; wohingegen, wenn stattdessen `browser.tabs.update(a, {successorTabId: b})` verwendet wird, Tab `a` weiterhin der Nachfolger anderer Tabs sein könnte, was unerwartet sein kann. Ein weiterer Vorteil von `tabs.moveInSuccession()` besteht darin, dass alle Nachfolgeränderungen atomar erfolgen, ohne sich um Rennbedingungen zwischen Aufrufen von {{WebExtAPIRef('tabs.update()')}} und {{WebExtAPIRef('tabs.get()')}} und anderen Operationen, wie dem Schließen eines Tabs durch den Benutzer, Sorgen machen zu müssen.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameter

- `tabIds`
  - : `array` von `integer`. Ein Array von Tab-`ID`s. Die Reihenfolge der Elemente im Array definiert die Beziehung der Tabs. Ungültige Tab-`ID`s oder Tab-`ID`s, die sich auf Tabs beziehen, die sich nicht im selben Fenster wie `tabId` befinden (oder das erste Tab im Array, falls `tabId` ausgelassen wird), werden ignoriert – sie behalten ihre aktuellen Nachfolger und Vorgänger.
- `tabId` {{optional_inline}}
  - : `integer`. Die `ID` des Tabs, das der Nachfolger des letzten Tabs im `tabIds`-Array sein wird. Wenn diese `ID` ungültig ist oder {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, hat das letzte Tab keinen Nachfolger. Standardmäßig {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}

  - : `object`.

    - `append` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die Tabs in `tabIds` vor oder nach `tabId` in der Nachfolge bewegt werden. Wenn `false`, werden die Tabs vor `tabId` bewegt, wenn `true`, werden die Tabs nach `tabId` bewegt. Standardmäßig `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die aktuellen Vorgänger oder Nachfolger (abhängig von `options.append`) von `tabId` mit der anderen Seite der Kette verknüpft werden, nachdem sie vor- oder angehängt wurde. Wenn true, geschieht eines der folgenden Dinge: wenn `options.append` false ist, wird das erste Tab im Array als Nachfolger aller aktuellen Vorgänger von `tabId` festgelegt; wenn `options.append` true ist, wird der aktuelle Nachfolger von tabId als Nachfolger des letzten Tabs im Array festgelegt. Standardmäßig `false`.

## Browser-Kompatibilität

{{Compat}}
