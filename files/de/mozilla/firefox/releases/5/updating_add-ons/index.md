---
title: Aktualisierung von Add-ons für Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Dieser Artikel bietet einen Überblick über die Änderungen, die Sie an Ihren Add-ons vornehmen müssen, damit sie in Firefox 5 ordnungsgemäß funktionieren. Eine vollständige Liste der entwicklerbezogenen Änderungen in Firefox 5 finden Sie in [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5).

## Müssen Sie überhaupt etwas tun?

Wenn Ihr Add-on auf [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO) verteilt wird, wurde es von einem automatisierten Kompatibilitätsprüfungs-Tool überprüft. Add-ons, die keine in Firefox 5 geänderten APIs verwenden und keine Binärkomponenten haben (die mit jedem großen Firefox-Release neu kompiliert werden müssen), wurden auf AMO automatisch aktualisiert, um anzuzeigen, dass sie in Firefox 5 funktionieren.

Sie sollten also zuerst AMO besuchen und prüfen, ob Ihr Add-on überhaupt geändert werden muss.

> [!NOTE]
> Sie sollten Ihr Add-on trotzdem in Firefox 5 testen, auch wenn es automatisch aktualisiert wurde. Es gibt Randfälle, die möglicherweise nicht automatisch erkannt werden.

Sobald Sie bestätigt haben, dass Änderungen erforderlich sind, kehren Sie zu dieser Seite zurück und lesen Sie weiter.

## Änderungen an der Benutzeroberfläche

Aufgrund des kurzen Entwicklungszyklus (sogar für unseren schnellen Veröffentlichungszyklus; Firefox 5 hatte aus zeitlichen Gründen einen besonders kurzen Zeitplan) gibt es nur sehr wenige Änderungen an der Benutzeroberfläche in Firefox 5.

### Bestimmung der UI-Sprache

In der Vergangenheit spiegelte die [`window.navigator.language`](/de/docs/Web/API/Navigator/language) DOM-Eigenschaft die Sprache der Benutzeroberfläche von Firefox wider. Das ist nicht mehr der Fall; stattdessen spiegelt sie den Wert des `Accept-Language`-Headers für das aktuelle Dokument wider. Wenn Sie die UI-Sprache ermitteln müssen, sollten Sie stattdessen den Wert der `general.useragent.locale`-Einstellung prüfen.

## DOM-Änderungen

Das Verhalten von [`setTimeout()`](/de/docs/Web/API/SetTimeout) und [`setInterval()`](/de/docs/Web/API/SetInterval) hat sich geändert; die minimal zulässige Zeit hat sich geändert und [variiert je nach Situation](/de/docs/Web/API/setTimeout#minimum_delay_and_timeout_nesting). Darüber hinaus sind Timeouts und Intervalle in inaktiven Tabs (Tabs, die der Benutzer aktuell nicht ansieht) auf eine pro Sekunde begrenzt.

## JavaScript-Änderungen

Die folgenden Schlüsselwörter sind jetzt in JavaScript reserviert, auch wenn Sie sich nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befinden:

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Verwenden Sie diese Schlüsselwörter nirgendwo in Ihrem Code, selbst nicht als Objekt-Eigenschafsnamen.

> [!NOTE]
> Dies ist eine der Dinge, die das automatische Upgrade-Tool von AMO möglicherweise nicht immer erkennt. Überprüfen Sie daher Ihren Code auf diese Schlüsselwörter, wenn Ihr Add-on automatisch aktualisiert wurde, aber weiterhin nicht richtig funktioniert.

## Schnittstellenänderungen

Die Instanziierung bestimmter Dienste, einschließlich des `nsICertOverrideService`, beim Start kann Firefox unbenutzbar machen ([Firefox-Bug 650858](https://bugzil.la/650858)). Dies passiert nur, wenn Sie versuchen, einen Dienst zu instanziieren, bevor das `load`-Ereignis ausgelöst wird.

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

Eine noch bessere Lösung ist natürlich, den Leistungsbest-Praktiken zu folgen und Dienste erst zu instanziieren, wenn Sie diese benötigen.

## Siehe auch

- [Firefox 5 für Entwickler](/de/docs/Mozilla/Firefox/Releases/5)
