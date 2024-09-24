---
title: "Navigator: webdriver-Eigenschaft"
short-title: webdriver
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebDriver")}}

Die schreibgeschützte Eigenschaft **`webdriver`**
des {{domxref("navigator")}}-Interfaces zeigt an, ob der User-Agent durch Automatisierung gesteuert wird.

Sie definiert eine standardisierte Methode, mit der kooperierende User-Agenten das Dokument darüber informieren, dass es durch [WebDriver](/de/docs/Web/WebDriver) gesteuert wird, damit z. B. alternative Codepfade während der Automatisierung ausgelöst werden können.

Die Eigenschaft `navigator.webdriver` ist wahr in:

- Chrome
  - : Wenn das `--enable-automation`- oder das `--headless`-Flag oder der
    `--remote-debugging-port` verwendet wird.
- Firefox
  - : Wenn die `marionette.enabled`-Voreinstellung oder das `--marionette`-Flag
    übergeben wird.

## Wert

Ein {{JSxRef("Boolean")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
