---
title: "Navigator: webdriver-Eigenschaft"
short-title: webdriver
slug: Web/API/Navigator/webdriver
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebDriver")}}

Die schreibgeschützte **`webdriver`**-Eigenschaft
der [`navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt an, ob der Benutzeragent durch Automatisierung gesteuert wird.

Sie definiert eine standardisierte Methode, mit der kooperierende Benutzeragenten das Dokument darüber informieren können, dass es durch [WebDriver](/de/docs/Web/WebDriver) gesteuert wird, beispielsweise um alternative Codepfade während der Automatisierung zu aktivieren.

Die `navigator.webdriver`-Eigenschaft ist wahr, wenn in:

- Chrome
  - : Das `--enable-automation` oder das `--headless` Flag oder der
    `--remote-debugging-port` verwendet wird.
- Firefox
  - : Die `marionette.enabled` Einstellung oder das `--marionette` Flag wird
    übergeben.

## Wert

Ein {{JSxRef("Boolean")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
