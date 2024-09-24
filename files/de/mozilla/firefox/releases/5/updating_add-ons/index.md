---
title: Aktualisierung von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über Änderungen, die Sie möglicherweise an Ihren Add-ons vornehmen müssen, damit sie in Firefox 5 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie unter [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) vertrieben wird, wurde es von einem automatisierten Tool zur Überprüfung der Kompatibilität geprüft. Add-ons, die keine in Firefox 5 geänderten APIs verwenden und keine Binärkomponenten enthalten (die für jede Hauptversion von Firefox neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 5 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob an Ihrem Add-on gearbeitet werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 5 testen, selbst wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Änderungen im Zusammenhang mit der Benutzeroberfläche

Aufgrund des kurzen Entwicklungszyklus (selbst für unseren schnellen Veröffentlichungszyklus; Firefox 5 hatte aus zeitlichen Gründen einen besonders kurzen Zeitplan) gibt es sehr wenige Änderungen im Zusammenhang mit der Benutzeroberfläche in Firefox 5.

### Bestimmung der UI-Sprache

In der Vergangenheit spiegelte die [`window.navigator.language`](/de/docs/Web/API/Navigator/language) DOM-Eigenschaft die Sprache der Benutzeroberfläche von Firefox wider. Dies ist nicht mehr der Fall; stattdessen spiegelt sie den Wert des `Accept-Language` Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache erkennen müssen, sollten Sie stattdessen den Wert der Einstellung `general.useragent.locale` betrachten.

## DOM-Änderungen

Das Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) hat sich geändert; die minimale erlaubte Zeit wurde geändert und [variiert je nach Situation](/de/docs/Web/API/Window/setTimeout#minimum_delay_and_timeout_nesting). Darüber hinaus sind Zeitlimits und Intervalle in inaktiven Tabs (also Tabs, die der Benutzer gerade nicht betrachtet) auf eins pro Sekunde begrenzt.

## JavaScript-Änderungen

Die folgenden Schlüsselwörter sind jetzt in JavaScript reserviert, selbst wenn Sie sich nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nirgendwo in Ihrem Code, auch nicht als Objekteigenschaftsnamen.

> [!NOTE]
> Dies ist einer der Fälle, die das automatische Upgrade-Tool von AMO möglicherweise nicht immer erfasst. Überprüfen Sie daher Ihren Code, falls Ihr Add-on automatisch aktualisiert wurde, aber trotzdem nicht ordnungsgemäß funktioniert.

## Schnittstellenänderungen

Die Instanziierung bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbenutzbar machen ([Firefox-Bug 650858](https://bugzil.la/650858)). Dies geschieht nur, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load`-Ereignis ausgelöst wird.

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

Eine noch bessere Lösung ist natürlich, bewährte Praktiken zur Leistungsoptimierung zu befolgen und Dienste erst zu instanziieren, wenn Sie sie verwenden müssen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
