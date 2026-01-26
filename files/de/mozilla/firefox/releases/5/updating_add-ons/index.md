---
title: Aktualisieren von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 5 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie in [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es durch ein automatisches Kompatibilitätsüberprüfungstool geprüft. Add-ons, die keine in Firefox 5 geänderten APIs verwenden und keine Binärkomponenten haben (die für jede größere Firefox-Version neu kompiliert werden müssen), wurden automatisch auf AMO aktualisiert, um anzuzeigen, dass sie in Firefox 5 funktionieren.

Sie sollten daher zunächst AMO besuchen und prüfen, ob an Ihrem Add-on überhaupt Änderungen vorgenommen werden müssen.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 5 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie auf diese Seite zurück und lesen Sie weiter.

## Änderungen in Bezug auf die Benutzeroberfläche

Aufgrund des kurzen Entwicklungszyklus (selbst für unseren schnellen Veröffentlichungstakt; Firefox 5 hatte aus zeitlichen Gründen einen besonders kurzen Zeitplan) gibt es nur sehr wenige Änderungen an der Benutzeroberfläche in Firefox 5.

### Bestimmen der UI-Sprache

In der Vergangenheit spiegelte die [`window.navigator.language`](/de/docs/Web/API/Navigator/language) DOM-Eigenschaft die Sprache der Benutzeroberfläche von Firefox wider. Dies ist nicht mehr der Fall; stattdessen spiegelt sie den Wert des `Accept-Language` Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache ermitteln müssen, sollten Sie stattdessen den Wert der Einstellung `general.useragent.locale` prüfen.

## DOM-Änderungen

Das Verhalten von [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout), [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval) und [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) hat sich geändert; die minimale erlaubte Zeit wurde geändert und [variiert je nach Situation](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified). Darüber hinaus sind Timeouts und Intervalle auf eines pro Sekunde in inaktiven Tabs begrenzt (d.h. Benutzer betrachtet den Tab nicht aktiv).

## JavaScript-Änderungen

Die folgenden Schlüsselwörter sind jetzt in JavaScript reserviert, selbst wenn Sie nicht den [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) verwenden:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nicht irgendwo in Ihrem Code, auch nicht als Objekt-Eigenschaftsnamen.

> [!NOTE]
> Dies ist eine der Änderungen, die das automatische Upgrade-Tool von AMO möglicherweise nicht immer erfasst. Überprüfen Sie daher Ihren Code auf diese Schlüsselwörter, wenn Ihr Add-on automatisch aktualisiert wurde, aber weiterhin nicht richtig funktioniert.

## Änderungen an Schnittstellen

Das Instanziieren bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbenutzbar machen ([Firefox Bug 650858](https://bugzil.la/650858)). Dies tritt nur auf, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load`-Ereignis ausgelöst wird.

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

Eine noch bessere Lösung ist es natürlich, den Leistungsempfehlungen zu folgen und Dienste erst zu instanziieren, wenn Sie sie benötigen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
