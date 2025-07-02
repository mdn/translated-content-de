---
title: Aktualisierung von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel gibt einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 5 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie unter [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) veröffentlicht ist, wurde es von einem automatisierten Kompatibilitätsüberprüfungstool überprüft. Add-ons, die keine APIs verwenden, die sich in Firefox 5 geändert haben, und keine binären Komponenten beinhalten (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 5 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob Ihr Add-on überhaupt Arbeit benötigt.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 5 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie auf diese Seite zurück und lesen Sie weiter.

## Änderungen am Benutzeroberfläche (UI)

Aufgrund des kurzen Entwicklungszyklus (selbst für unseren schnellen Release-Zyklus; Firefox 5 hatte aus zeitlichen Gründen einen besonders kurzen Zeitplan) gibt es nur sehr wenige Änderungen an der Benutzeroberfläche in Firefox 5.

### Bestimmung der UI-Sprache

In der Vergangenheit spiegelte die [`window.navigator.language`](/de/docs/Web/API/Navigator/language) DOM-Eigenschaft die Sprache der Firefox-Benutzeroberfläche wider. Dies ist nicht mehr der Fall; stattdessen spiegelt es den Wert des `Accept-Language` Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache erkennen müssen, sollten Sie stattdessen den Wert der `general.useragent.locale`-Einstellung betrachten.

## DOM-Änderungen

Das Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) hat sich geändert; die minimale erlaubte Zeit hat sich geändert und [variiert je nach Situation](/de/docs/Web/API/Window/setTimeout#minimum_delay_and_timeout_nesting). Außerdem werden Timeouts und Intervalle in inaktiven Tabs auf eins pro Sekunde begrenzt (also Tabs, die der Benutzer momentan nicht betrachtet).

## JavaScript-Änderungen

Die folgenden Schlüsselwörter sind jetzt in JavaScript reserviert, selbst wenn Sie nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) sind:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nirgendwo in Ihrem Code, auch nicht als Objekteigenschaftsnamen.

> [!NOTE]
> Dies ist einer der Fälle, bei denen das automatische Upgrade-Tool von AMO möglicherweise nicht immer richtig funktioniert, überprüfen Sie daher Ihren Code auf diese Schlüsselwörter, wenn Ihr Add-on automatisch aktualisiert wurde, aber trotzdem nicht richtig funktioniert.

## Schnittstellenänderungen

Die Instanziierung bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbrauchbar machen ([Firefox-Bug 650858](https://bugzil.la/650858)). Dies passiert nur, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load` Ereignis ausgelöst wird.

Um dies zu beheben, verschieben Sie die Instanziierung dieser Dienste in Ihren `load` Ereignishandler:

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

Eine noch bessere Lösung ist natürlich, Performance-Best Practices zu befolgen und Dienste erst dann zu instanziieren, wenn Sie sie wirklich benötigen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
