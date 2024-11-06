---
title: "Navigator: webdriver-Eigenschaft"
short-title: webdriver
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: bb0f798e4116c14840f1a3dad3ee7e176ca70a6a
---

{{APIRef("WebDriver")}}

Die **`webdriver`** Eigenschaft, die nur gelesen werden kann, des [`navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt an, ob der User-Agent durch Automation gesteuert wird.

Sie definiert eine standardisierte Methode, mit der kooperierende User-Agents dem Dokument mitteilen, dass sie von [WebDriver](/de/docs/Web/WebDriver) gesteuert werden, beispielsweise damit während der Automatisierung alternative Codepfade ausgelöst werden können.

Die `navigator.webdriver` Eigenschaft ist wahr, wenn:

- Chrome
  - : Das `--enable-automation` oder `--headless` Flag verwendet wird oder das
    `--remote-debugging-port` Flag den Port 0 angibt.
- Firefox
  - : Die `marionette.enabled` Präferenz oder das `--marionette` Flag übergeben wird.

## Wert

Ein {{JSxRef("Boolean")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
