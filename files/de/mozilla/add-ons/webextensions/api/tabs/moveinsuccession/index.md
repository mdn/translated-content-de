---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ändert die Nachfolgebeziehung für eine Gruppe von Tabs.

Mithilfe der {{WebExtAPIRef('tabs')}} API kann einem Tab ein Nachfolger-Tab im selben Fenster zugewiesen werden. Wenn Tab B der Nachfolger von Tab A ist und Tab A geschlossen wird, während es das aktive Tab ist, wird Tab B als nächstes aktiviert. Hat Tab A keinen Nachfolger, bestimmt der Browser, welches Tab als nächstes aktiviert wird. Wenn Tab B der Nachfolger von Tab A ist, wird Tab A als Vorgänger von Tab B bezeichnet. Ein Tab kann höchstens einen Nachfolger haben, aber beliebig viele Vorgänger. Ein Tab kann sich nicht selbst oder ein Tab in einem anderen Fenster als Nachfolger haben.

Alle Tabs beginnen ohne Nachfolger; Tabs erhalten nur dann einen Nachfolger, wenn er ihnen durch eine WebExtension zugewiesen wird. Allerdings sollte der Browser vermeiden, dass ein Tab in einer Nachfolgebeziehung zu anderen Tabs verwaist wird: wenn Tab B der Nachfolger von Tab A ist und Tab C der Nachfolger von Tab B, und B geschlossen wird (oder in ein anderes Fenster verschoben wird), dann wird Tab A Tab C als Nachfolger übernehmen. Das Verhindern, dass C auf diese Weise verwaist, wird als Entfernen eines Tabs (B) aus seiner Nachfolgelinie bezeichnet.

`tabs.moveInSuccession()` nimmt ein Array von Tab-IDs und entfernt alle diese Tabs aus ihren Nachfolgelinien. Dann wird jedes Tab als Nachfolger des vorherigen Tabs im Array festgelegt, wodurch eine Kette entsteht. Optional kann der Nachfolger des letzten Tabs in der Kette auf ein Anker-Tab gesetzt werden, das _nicht_ aus seiner Nachfolgelinie entfernt wird. Zusätzliche Optionen können steuern, ob die Tab-Kette "vorangestellt" oder "angehängt" zum Anker-Tab sein soll und ob die Aktion wie ein Listen-Einfügen fungiert.

Obwohl der Nachfolger-Tab mit {{WebExtAPIRef('tabs.update()')}} zugewiesen werden kann, ist es oft wünschenswert, `tabs.moveInSuccession()` zu verwenden, um Nachfolger zu ändern, selbst wenn nur ein einzelnes Tab seinen Nachfolger erhält. Der Unterschied ist, dass `browser.tabs.moveInSuccession([a], b)` das Tab `a` aus seiner Nachfolgelinie entfernt, sodass alle Vorgänger von `a` den vorherigen Nachfolger von `a` übernehmen; hingegen, wenn `browser.tabs.update(a, {successorTabId: b})` verwendet wird, kann Tab `a` weiterhin der Nachfolger anderer Tabs sein, was unerwartet sein könnte. Ein weiterer Vorteil von `tabs.moveInSuccession()` besteht darin, dass alle Nachfolgeänderungen atomar durchgeführt werden, ohne sich um Rennen zwischen Aufrufen von {{WebExtAPIRef('tabs.update()')}}, {{WebExtAPIRef('tabs.get()')}} und anderen Operationen, wie dem Schließen eines Tabs durch den Benutzer, kümmern zu müssen.

## Syntax

```js-nolint
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Parameter

- `tabIds`
  - : `array` von `integer`. Ein Array von Tab-`ID`s. Die Reihenfolge der Elemente im Array definiert die Beziehung der Tabs. Ungültige Tab-`ID`s oder Tab-`ID`s, die Tabs entsprechen, die sich nicht im selben Fenster wie `tabId` (oder das erste Tab im Array, wenn `tabId` ausgelassen wird) befinden, werden ignoriert - sie behalten ihre aktuellen Nachfolger und Vorgänger.
- `tabId` {{optional_inline}}
  - : `integer`. Die `ID` des Tabs, der der Nachfolger des letzten Tabs im `tabIds`-Array sein wird. Ist diese `ID` ungültig oder {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, wird das letzte Tab keinen Nachfolger haben. Standard ist {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}

  - : `object`.

    - `append` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die Tabs in `tabIds` vor oder nach `tabId` in der Nachfolge bewegt werden. Wenn `false`, werden die Tabs vor `tabId` bewegt, wenn `true`, werden die Tabs nach `tabId` bewegt. Standard ist `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Bestimmt, ob die aktuellen Vorgänger oder Nachfolger (abhängig von `options.append`) von `tabId` nach dem Voranstellen oder Anhängen an die andere Seite der Kette geknüpft werden. Wenn true, passiert eines der folgenden: wenn `options.append` `false` ist, wird das erste Tab im Array als Nachfolger von jedem aktuellen Vorgänger von `tabId` gesetzt; wenn `options.append` `true` ist, wird der aktuelle Nachfolger von tabId als Nachfolger des letzten Tabs im Array gesetzt. Standard ist `false`.

## Browser-Kompatibilität

{{Compat}}
