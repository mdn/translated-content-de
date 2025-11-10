---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ändert die Nachfolgebeziehung für eine Gruppe von Tabs.

Mit der {{WebExtAPIRef('tabs')}} API kann einem Tab ein _Nachfolger_-Tab im selben Fenster zugeordnet werden. Wenn Tab B der Nachfolger von Tab A ist und Tab A geschlossen wird, während es das aktive Tab ist, wird Tab B als nächstes aktiviert. Hat Tab A keinen Nachfolger, kann der Browser frei entscheiden, welches Tab als nächstes aktiviert wird. Ist Tab B der Nachfolger von Tab A, wird Tab A als _Vorgänger_ von Tab B bezeichnet. Ein Tab kann höchstens einen Nachfolger haben, aber eine beliebige Anzahl von Vorgängern. Ein Tab kann sich selbst oder ein Tab in einem anderen Fenster nicht als Nachfolger nehmen.

Alle Tabs beginnen ohne Nachfolger; Tabs erhalten nur dann einen Nachfolger, wenn ihnen von einer WebExtension einer zugewiesen wird. Der Browser darf jedoch nach Möglichkeit kein Tab in einer Nachfolgeverbindung zu anderen Tabs verwaisen lassen: Wenn Tab B der Nachfolger von Tab A ist und Tab C der Nachfolger von Tab B ist und B geschlossen wird (oder in ein anderes Fenster verschoben wird), dann nimmt Tab A Tab C als seinen Nachfolger. Das Verhindern, dass C auf diese Weise verwaist, wird als _Verschieben eines Tabs_ (B) _aus seiner Nachfolgelinie_ bezeichnet.

`tabs.moveInSuccession()` nimmt ein Array von Tab-IDs und verschiebt alle diese Tabs aus ihren Nachfolgelinien. Es macht dann jedes Tab zum Nachfolger des vorherigen Tabs im Array und bildet eine Kette. Optional kann der Nachfolger des letzten Tabs in der Kette auf ein Ankertab gesetzt werden, das _nicht_ aus seiner Nachfolgelinie verschoben wird. Zusätzliche Optionen können steuern, ob die Tab-Kette "vorangestellt" oder "angehängt" an das Ankertab wird und ob der Vorgang wie ein Einfügen in eine verkettete Liste wirkt.

Während der Nachfolger-Tab mit {{WebExtAPIRef('tabs.update()')}} zugewiesen werden kann, ist es oft wünschenswert, `tabs.moveInSuccession()` zu verwenden, um Nachfolger zu ändern, selbst wenn nur einem einzelnen Tab ein Nachfolger zugewiesen wird. Der Unterschied besteht darin, dass `browser.tabs.moveInSuccession([a], b)` Tab `a` aus seiner Nachfolgelinie verschiebt, sodass alle Vorgänger von `a` den vorherigen Nachfolger von `a` übernehmen; während wenn `browser.tabs.update(a, {successorTabId: b})` stattdessen verwendet wird, Tab `a` weiterhin der Nachfolger anderer Tabs sein kann, was unerwartet sein könnte. Ein weiterer Vorteil von `tabs.moveInSuccession()` ist, dass alle Nachfolgeänderungen atomar erfolgen, ohne sich um Race-Conditions zwischen Aufrufen von {{WebExtAPIRef('tabs.update()')}} und {{WebExtAPIRef('tabs.get()')}} und anderen Operationen wie dem Schließen eines Tabs durch den Benutzer kümmern zu müssen.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameter

- `tabIds`
  - : `array` von `integer`. Ein Array von Tab-`ID`s. Die Reihenfolge der Elemente im Array definiert die Beziehung der Tabs. Ungültige Tab-`ID`s oder Tab-`ID`s, die Tabs entsprechen, die sich nicht im selben Fenster wie `tabId` (oder das erste Tab im Array, falls `tabId` weggelassen wird) befinden, werden ignoriert - sie behalten ihre aktuellen Nachfolger und Vorgänger.
- `tabId` {{optional_inline}}
  - : `integer`. Die `ID` des Tabs, das der Nachfolger des letzten Tabs im `tabIds` Array wird. Wenn diese `ID` ungültig ist oder {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, hat das letzte Tab keinen Nachfolger. Standardwert ist {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}
  - : `object`.
    - `append` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die Tabs in `tabIds` vor oder nach `tabId` in der Nachfolge verschoben werden. Wenn `false`, werden die Tabs vor `tabId` verschoben; wenn `true`, werden die Tabs nach `tabId` verschoben. Standardwert ist `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die aktuellen Vorgänger oder Nachfolger (abhängig von `options.append`) von `tabId` mit der anderen Seite der Kette verknüpft werden, nachdem sie vorangestellt oder angehängt wurden. Wenn true, passiert folgendes: Wenn `options.append` `false` ist, wird das erste Tab im Array als Nachfolger der aktuellen Vorgänger von `tabId` gesetzt; wenn `options.append` `true` ist, wird der aktuelle Nachfolger von tabId als Nachfolger des letzten Tabs im Array gesetzt. Standardwert ist `false`.

## Browser-Kompatibilität

{{Compat}}
