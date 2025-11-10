---
title: Aktualisieren von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie ordnungsgemäß in Firefox 5 funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie unter [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Falls Ihr Add-on über [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatischen Tool zur Überprüfung der Kompatibilität geprüft. Add-ons, die keine in Firefox 5 geänderten APIs verwenden und keine Binärkomponenten enthalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzugeben, dass sie in Firefox 5 funktionieren.

Sie sollten also damit beginnen, AMO zu besuchen und zu prüfen, ob bei Ihrem Add-on überhaupt Änderungen erforderlich sind.

> [!NOTE]
> Sie sollten Ihr Add-on dennoch in Firefox 5 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Sonderfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Änderungen in der Benutzeroberfläche

Aufgrund des kurzen Entwicklungszyklus (selbst für unseren schnellen Freigabezyklus; Firefox 5 befand sich aus zeitlichen Gründen auf einem besonders kurzen Zeitplan) gibt es sehr wenige Änderungen in der Benutzeroberfläche von Firefox 5.

### Bestimmung der UI-Sprache

In der Vergangenheit hat die [`window.navigator.language`](/de/docs/Web/API/Navigator/language) DOM-Eigenschaft die Sprache der Benutzeroberfläche von Firefox widergespiegelt. Das ist nicht mehr der Fall; stattdessen spiegelt sie den Wert des `Accept-Language`-Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache erkennen müssen, sollten Sie stattdessen den Wert der `general.useragent.locale`-Einstellung prüfen.

## DOM-Änderungen

Das Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) hat sich geändert; die minimal zulässige Zeit hat sich geändert und [variiert je nach Situation](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified). Zusätzlich werden Timeouts und Intervalle auf eines pro Sekunde in inaktiven Tabs (d.h. Tabs, die der Benutzer gerade nicht betrachtet) begrenzt.

## JavaScript-Änderungen

Die folgenden Schlüsselwörter sind nun in JavaScript reserviert, auch wenn Sie nicht im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) sind:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nirgendwo in Ihrem Code, selbst nicht als Objekteigenschaftsnamen.

> [!NOTE]
> Dies ist eine der Sachen, die AMOs automatisches Upgrade-Tool möglicherweise nicht immer erkennt, daher überprüfen Sie Ihren Code auf diese, wenn Ihr Add-on automatisch aktualisiert wurde, aber trotzdem nicht richtig funktioniert.

## Schnittstellenänderungen

Die Instanziierung bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbrauchbar machen ([Firefox Bug 650858](https://bugzil.la/650858)). Dies geschieht nur, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load`-Ereignis ausgelöst wird.

Um dies zu beheben, verschieben Sie die Instanziierung dieser Dienste in Ihren `load`-Ereignishandler:

```js
var MyObject = {
  comp: null,
  init() {
    this.comp = Components.classes["…"].getService(/* … */);
  },
  // …
};
window.addEventListener(
  "load",
  function () {
    MyObject.init();
  },
  false,
);
```

Eine noch bessere Lösung ist es natürlich, den besten Praktiken zur Leistung zu folgen und Dienste erst dann zu instanziieren, wenn Sie sie benötigen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
