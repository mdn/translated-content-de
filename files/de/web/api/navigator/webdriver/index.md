---
title: "Navigator: webdriver-Eigenschaft"
short-title: webdriver
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebDriver")}}

Die schreibgeschützte **`webdriver`**-Eigenschaft des [`navigator`](/de/docs/Web/API/Navigator)-Interfaces zeigt an, ob der User-Agent durch Automatisierung gesteuert wird.

Sie definiert eine standardisierte Methode, mit der kooperierende User-Agents das Dokument darüber informieren können, dass es durch [WebDriver](/de/docs/Web/WebDriver) gesteuert wird, damit beispielsweise alternative Codepfade während der Automatisierung ausgelöst werden können.

Die `navigator.webdriver`-Eigenschaft ist wahr, wenn:

- Chrome
  - : Das `--enable-automation`- oder das `--headless`-Flag oder der
    `--remote-debugging-port` verwendet wird.
- Firefox
  - : Die `marionette.enabled`-Einstellung oder das `--marionette`-Flag
    übergeben wird.

## Wert

Ein {{JSxRef("Boolean")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
