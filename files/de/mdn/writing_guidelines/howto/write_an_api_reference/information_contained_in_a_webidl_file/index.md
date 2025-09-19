---
title: Informationen, die in einer WebIDL-Datei enthalten sind
slug: MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Beim Schreiben von Dokumentationen über eine API gibt es viele Informationsquellen: Die Spezifikationen beschreiben, was implementiert werden soll sowie das Modell, und die Implementierungen beschreiben, was tatsächlich in die Browser eingebaut wurde. WebIDL-Dateien sind eine sehr komprimierte Art, viele, aber nicht alle, Informationen über die API bereitzustellen. Dieses Dokument dient als Referenz, um die WebIDL-Syntax zu verstehen.

IDL steht für **_Interface Definition Language_** und ist dafür konzipiert, APIs zu beschreiben. In der größeren Welt der Informatik gibt es mehrere Arten von IDL. In der Welt der Browser wird die IDL, die wir verwenden, _WebIDL_ genannt. Zwei Arten von WebIDL sind verfügbar: die in der WebIDL-Spezifikation angegebene und die in Browsern implementierte. Die Spezifikation ist die kanonische Referenz, und das Browser-WebIDL beschreibt, was tatsächlich in einem bestimmten Browser implementiert ist und enthält zusätzliche Dinge wie Anmerkungen, Informationen über nicht standardisierte Elemente und browserspezifische Erweiterungen der IDL-Spezifikation.

## Wo man WebIDL-Dateien findet

WebIDL kann an mehreren Orten gefunden werden:

- Jede Spezifikation enthält WebIDL im Text: Es ist eine sehr bequeme Möglichkeit, präzise Definitionen zu vermitteln. Diese beschreiben die Syntax der API. Obwohl es sich um die kanonische Referenz handelt, müssen wir beachten, dass sie sich von der tatsächlichen Implementierung unterscheiden können. Auf MDN wollen wir praktisch sein und dokumentieren, was die Webplattform wirklich ist, nicht was sie idealerweise sein sollte. Überprüfen Sie daher, was vorhanden ist, mit Implementierungen (und zögern Sie nicht, Fehler zu melden, wenn Sie Inkonsistenzen entdecken).
- Drei Browser-Engines verwenden (modifiziertes) WebIDL als Teil ihrer Toolchain: Gecko, Chromium/Blink und WebCore/WebKit. Vor-Chromium-Versionen von Edge haben es intern verwendet, aber diese sind leider nicht öffentlich.
  - Für Gecko sind alle WebIDL-Dateien in einem Verzeichnis zusammengefasst: <https://searchfox.org/firefox-main/source/dom/webidl/>. Ihre Erweiterung ist `.webidl`. Es gibt andere `*.idl`-Dateien im Gecko-Quellcode, aber sie sind nicht WebIDL, daher können Sie diese ignorieren. Ältere Versionen von Gecko haben einige ihrer WebIDL etwas verstreut, und möglicherweise verwenden sie sogar Mozillas IDL anstelle von WebIDL, um einige Webschnittstellen zu beschreiben, aber das wird in keinem aktuellen Gecko-Code ein Problem sein.
  - Für Chromium sind sie an zwei Orten zu finden, beide Unterverzeichnisse des Quellcodes im Verzeichnis [`renderer/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/): [`core/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/core/) und [`modules/`](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/modules/). Chromium-Quellcode hat IDL-Dateien an anderen Stellen, aber diese sind Teil des Testsystems und nicht relevant für API-Implementierungen.
  - Für WebCore sind sie im Quellcode verstreut, so dass Sie ein wenig mehr graben müssen: Beispielsweise <https://github.com/WebKit/webkit/blob/main/Source/WebCore/html/DOMTokenList.idl>

## Verschiedene Dialekte von WebIDL

WebIDL ist in [seiner Spezifikation](https://webidl.spec.whatwg.org/) definiert. Es wurde jedoch so gestaltet, dass es erweitert werden kann, um mehr Informationen zu vermitteln, und Browser-Hersteller haben dies getan:

- Für Gecko hat Mozilla die [Dokumentation](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html) seines dialektalen WebIDLs erstellt.
- Für Chromium hat Google auch ein [Dokument](https://www.chromium.org/blink/webidl/) erstellt, um seine Erweiterungen zu beschreiben.
- Für WebCore hat Apple ebenfalls eine [Seite](https://trac.webkit.org/wiki/WebKitIDL) für seinen Dialekt bereitgestellt.

> [!NOTE]
> Wir beschreiben hier nur den WebIDL-Teil, welcher beim Erstellen von Dokumentationen am nützlichsten ist. Es gibt viele weitere Anmerkungen, die für Implementierer nützlich sind; beziehen Sie sich auf die vier oben verlinkten Dokumente, um einen vollständigen Überblick zu erhalten.

## Schnittstellen

Dieser Abschnitt erklärt die WebIDL-Syntax, die die allgemeinen Merkmale der API beschreibt.

### Name der Schnittstelle

Der Schnittstellenname ist der String, der nach dem Schlüsselwort `interface` und vor der nächsten öffnenden geschweiften Klammer (`'{'`) oder dem Doppelpunkt (`':'`) erscheint.

```webidl
interface URL {};
```

Jede WebIDL-Schnittstelle, sei es eine echte Schnittstelle oder ein Mixin, hat ihre eigene Seite in der Dokumentation, die jeden Konstruktor, jede Eigenschaft und jede Methode auflistet, die für sie definiert sind.

### Vererbungskette

Der Elter, falls vorhanden, einer gegebenen Schnittstelle wird nach dem Schnittstellennamen definiert und folgt auf einen Doppelpunkt (`':'`). Es kann pro Schnittstelle nur einen Elter geben.

```webidl
interface HTMLMediaElement : HTMLElement {…}
```

Die Vererbungskette wird automatisch in der Seitenleiste aufgelistet (verwendet das \\{{APIRef}}-Makro). Sie kann auch als SVG-Bild über das Makro \\{{InheritanceDiagram}} hinzugefügt werden.

### Mixins

Einige Eigenschaften oder Methoden stehen mehreren Schnittstellen zur Verfügung. Um eine Neudefinition zu verhindern, werden sie in speziellen WebIDL-Schnittstellen definiert, die _Mixins_ genannt werden.

Ab September 2019 wurde die Mixin-Syntax aktualisiert. In der neuen Syntax verwendet man `interface mixin`, um eine Mixin-Schnittstelle zu definieren, wie folgt:

```webidl
interface MyInterface {};

interface mixin MyMixin {
  void somethingMixedIn();
}
```

Dann verwendet man das Schlüsselwort `includes`, um zu sagen, dass die in einem Mixin definierten Eigenschaften in einer Schnittstelle verfügbar sind:

```webidl
MyInterface includes MyMixin;
```

Mixins haben keine Vererbung und können keine anderen Mixins enthalten. Sie unterstützen jedoch Partials, daher werden Sie so etwas sehen:

```webidl
interface MyInterface {};
interface mixin MyMixin {};

partial interface mixin MyMixin {
  void somethingMixedIn();
};

MyInterface includes MyMixin;
```

Für Dokumentationszwecke verbirgt MDN Mixins. Sie sind abstrakte und nur in der Spezifikation enthaltene Konstruktionen. Sie sind in der Browser-Konsole nicht sichtbar und es ist nützlicher zu wissen, auf welchen echten Schnittstellen Methoden und Eigenschaften implementiert sind.

Wenn Sie ein Mixin in IDL antreffen, wie [HTMLHyperlinkElementUtils](https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils),
suchen Sie nach den Schnittstellen, die das Mixin implementieren, zum Beispiel
[HTMLAnchorElement](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlanchorelement), und dokumentieren Sie die Mixin-Mitglieder direkt auf diesen Schnittstellen.

In der Praxis bedeutet dies, dass anstatt `HTMLHyperlinkElementUtils` zu dokumentieren,
die Dokumentation auf die konkreten Schnittstellen, wie [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
und [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement) hinzugefügt wird.

Siehe die folgenden zwei Seiten, die `HTMLHyperlinkElementUtils.hash` entsprechend dokumentieren:

- [`HTMLAnchorElement.hash`](/de/docs/Web/API/HTMLAnchorElement/hash)
- [`HTMLAreaElement.hash`](/de/docs/Web/API/HTMLAreaElement/hash)

Für Kompatibilitätsdaten konsultieren Sie die [Datenrichtlinie für Mixins in BCD](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).

### Alte Mixin-Syntax

In der alten Mixin-Syntax von WebIDL, die man möglicherweise noch an einigen Stellen antrifft, werden Mixins unter Verwendung der `[NoInterfaceObject]`-Anmerkung vorangestellt:

```webidl
[NoInterfaceObject]
   interface MyMixin {…}
```

In der alten Syntax werden Mixins, die auf einer Schnittstelle implementiert sind, mit dem Schlüsselwort `implements` definiert.

```webidl
MyInterface implements MyMixin;
```

### Verfügbarkeit in Window und Workern

Die Verfügbarkeit in Web-Workern (jeglicher Art) und im Window-Bereich wird mit einer Anmerkung definiert: `[Exposed=(Window,Worker)]`. Die Anmerkung gilt für die Partial-Schnittstelle, mit der sie aufgeführt ist.

```webidl
[Exposed=(Window,Worker)]
interface Performance {
   [DependsOn=DeviceState, Affects=Nothing]
   DOMHighResTimeStamp now();
};

[Exposed=Window]
partial interface Performance {
   [Constant]
   readonly attribute PerformanceTiming timing;
   [Constant]
   readonly attribute PerformanceNavigation navigation;

   jsonifier;
};
```

In diesem Fall ist `Performance.now()` im `Window`-Kontext und für jeden Worker verfügbar, während `Performance.timing`, `Performance.navigation` und `Performance.toJSON()` für Web-Worker nicht verfügbar sind.

Die häufigsten Werte für `[Exposed]` sind:

- `Window`
  - : Die Partial-Schnittstelle ist für den [`Window`](/de/docs/Web/API/Window)-globalen Bereich verfügbar.
- `Worker`
  - : Die Partial-Schnittstelle ist für jeden Art von Worker verfügbar, d.h. wenn der globale Bereich ein Nachfahre von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) ist — [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) (Es ist auch für `ChromeWorker` verfügbar, aber wir dokumentieren dies nicht, da sie im Web nicht sichtbar sind und intern für Firefox sind.)
- `DedicatedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar.
- `SharedWorker`
  - : Die Partial-Schnittstelle ist nur für den [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar.
- `ServiceWorker`
  - : Die Partial-Schnittstelle ist nur für den [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) verfügbar.

Ein weiterer Wert ist möglich, wie `System`, hat aber eine [spezielle Bedeutung](https://firefox-source-docs.mozilla.org/dom/webIdlBindings/index.html#custom-extended-attributes) und muss nicht dokumentiert werden.

Beachten Sie, dass diese möglichen Werte selbst in WebIDL-Dateien definiert sind. Schnittstellen können eine `[Global=xyz]`-Anmerkung haben. Das bedeutet, dass wenn ein Objekt dieses Typs als globales Scope verwendet wird, jede Schnittstelle, Eigenschaft oder Methode mit `xyz` als Wert von `[Exposed]` verfügbar ist.

```webidl
[Global=(Worker,DedicatedWorker), Exposed=DedicatedWorker]
interface DedicatedWorkerGlobalScope : WorkerGlobalScope {…}
```

Hier wird definiert, dass wenn der globale Bereich vom Typ `DedicatedWorkerGlobalScope` ist, das heißt wenn wir in einem dedizierten Worker sind, jede Schnittstelle, Eigenschaft oder Methode, die dem `Worker` oder `DedicatedWorker` über die `[Exposed]`-Anmerkung ausgesetzt ist, verfügbar ist.

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einer Partial-Schnittstelle, einschließlich ihres Konstruktors, ihrer Eigenschaften und Methoden durch eine Präferenz gesteuert werden (gewöhnlich als "pref" bezeichnet). Dies wird auch im WebIDL vermerkt.

```webidl
[Pref="media.webspeech.synth.enabled"]
interface SpeechSynthesis {
   readonly attribute boolean pending;
   readonly attribute boolean speaking;
   readonly attribute boolean paused;
};
```

Hier steuert die `media.webspeech.synth.enabled`-Präferenz die `SpeechSynthesis`-Schnittstelle und ihre Eigenschaften (die vollständige Auflistung hat mehr als 3).

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

### Nur im Systemcode verfügbar

Einige Schnittstellenfunktionen sind möglicherweise nur im internen Systemcode des Browsers oder im Chrome-Code verfügbar. Um dies zu kennzeichnen, verwenden wir in Gecko \[ChromeOnly], zum Beispiel ist die Eigenschaft propName im folgenden Beispiel nur über Chrome-Code aufrufbar:

```webidl
interface MyInterface {
  [ChromeOnly]
  readonly attribute PropValue propName;
};
```

## Eigenschaften

Sie können die Definition einer Eigenschaft am Vorhandensein des Schlüsselworts `attribute` erkennen.

### Name der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Im obigen Beispiel ist der Name der Eigenschaft `error`; in den Docs werden wir uns darauf als `HTMLMediaElement.error` beziehen, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung auf die Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.error')}} oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.error', 'error')}}, wenn der Kontext offensichtlich und unmissverständlich ist.

### Typ der Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Der Eigenschaftswert ist ein Objekt vom Typ `MediaError`. Das Fragezeichen (`'?'`) zeigt an, dass er den Wert `null` annehmen kann, und die Dokumentation muss erklären, _wann_ dies eintreten kann. Wenn kein Fragezeichen vorhanden ist, kann die `error`-Eigenschaft nicht `null` sein.

Der Typ der Eigenschaft kann mit einem _erweiterten Attribut_ vorangestellt sein, einer Zeichenkette, die in eckigen Klammern eingeschlossen ist (wie `[LegacyNullToEmptyString]`). Solche erweiterten Attribute weisen auf spezielles Verhalten hin, das im Prosa-Text beschrieben werden muss. Hier ist eine Liste von Standard-Erweiterten Attributen von Typen, und die Ergänzungen, die gemacht werden müssen:

- `[LegacyNullToEmptyString]`
  - : Der `null`-Wert wird in einer nicht standardmäßigen Weise in einen String umgewandelt. Der Standardweg besteht darin, es in den String `"null"` umzuwandeln, aber in diesem Fall wird es in `""` umgewandelt.

    Fügen Sie diesen Satz am Ende des _Wert_-Abschnitts des Artikels hinzu:

    _Wenn auf den `null`-Wert gesetzt, wird dieser `null`-Wert in den leeren String (`""`) umgewandelt, daher ist `elt.innerHTML = null` gleichbedeutend mit `elt.innerHTML = ""`._

    Das kleine Inline-Beispiel muss für jede Eigenschaft angepasst werden.

### Schreibberechtigungen für die Eigenschaft

```webidl
readonly attribute MediaError? error;
```

Wenn das Schlüsselwort `readonly` vorhanden ist, kann die Eigenschaft nicht geändert werden. Sie muss als schreibgeschützt markiert werden:

- In der Schnittstelle, indem das \\{{ReadOnlyInline}}-Makro neben seinem Definitionsterm hinzugefügt wird.
- Im ersten Satz seiner eigenen Seite, indem die Beschreibung mit beginnt: _Die schreibgeschützte **`HTMLMediaElement.error`**-Eigenschaft…_
- Indem die Beschreibung in der Schnittstellenseite mit _Gibt zurück …_ beginnt.

> [!NOTE]
> Nur schreibgeschützte Eigenschaften können als 'zurückgebend' beschrieben werden. Nicht schreibgeschützte Eigenschaften können auch verwendet werden, um einen Wert festzulegen.

### Auslösen von Ausnahmen

```webidl
[SetterThrows]
            attribute DOMString src;
```

In einigen Fällen, wie wenn einige Werte illegal sind, kann das Setzen eines neuen Wertes dazu führen, dass eine Ausnahme ausgelöst wird. Dies wird mit der `[SetterThrows]`-Anmerkung markiert. Wenn dies der Fall ist, _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt über Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, aber durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Es ist unüblich, dass Getter Ausnahmen auslösen, obwohl es in einigen Fällen passiert. In diesem Fall wird die `[GetterThrows]`-Anmerkung verwendet. Auch hier _muss_ der Syntax-Abschnitt der Eigenschaftsseite einen Abschnitt über Ausnahmen haben.

```webidl
partial interface Blob {
  [GetterThrows]
  readonly attribute unsigned long long size;
};
```

### Nicht auslösen von Ausnahmen

Wenn die Semantik von WebIDL nicht befolgt wird, wird möglicherweise eine Ausnahme ausgelöst, selbst ohne `[SetterThrows]` oder `[GetterThrows]` gesetzt. Wenn wir zum Beispiel im strengen Modus versuchen, eine schreibgeschützte Eigenschaft auf einen neuen Wert zu setzen, das heißt ihren impliziten Setter aufzurufen, wirft eine schreibgeschützte Eigenschaft im strengen Modus.

Hauptsächlich aus Kompatibilitätsgründen ist dieses Verhalten manchmal störend. Um dies zu verhindern, indem ein No-Op-Setter erstellt wird (das heißt, indem jeder Versuch, die Eigenschaft auf einen neuen Wert zu setzen, stillschweigend ignoriert wird), kann die `[LenientSetter]`-Anmerkung verwendet werden.

```webidl
partial interface Document {
  [LenientSetter]
  readonly attribute boolean fullscreen;
  [LenientSetter]
  readonly attribute boolean fullscreenEnabled;
};
```

In diesen Fällen wird der Beschreibung der Eigenschaft ein zusätzlicher Satz hinzugefügt. Z.B.

_Obwohl diese Eigenschaft schreibgeschützt ist, wird sie nicht werfen, wenn sie geändert wird (auch nicht im strengen Modus); der Setter ist ein No-Operation und wird ignoriert._

### Neue Objekte oder Referenzen

Der Rückgabewert einer Eigenschaft kann entweder eine Kopie eines internen Objekts, ein neu erstelltes synthetisches Objekt oder eine Referenz auf ein internes Objekt sein.

Grundlegende Objekte mit Typen wie {{jsxref("String")}} (als IDL `DOMString`, oder andere), {{jsxref("Number")}} (als IDL `byte`, `octet`, `unsigned int`, oder andere), und {{jsxref("Boolean")}} werden immer kopiert und nichts Besonderes muss über sie vermerkt werden (es ist ein natürliches Verhalten, das ein JavaScript-Entwickler erwartet).

Für Schnittstellenobjekte ist die Standardeinstellung, dass eine _Referenz_ auf das interne Objekt zurückgegeben wird. Dies muss sowohl in der Kurzbeschreibung auf der Schnittstellenseite als auch in der Beschreibung auf den spezifischen Unterseiten vermerkt werden.

> [!NOTE]
> Das Schlüsselwort `readonly`, das mit einer Eigenschaft verwendet wird, die ein Objekt zurückgibt, bezieht sich auf die Referenz (das interne Objekt kann nicht geändert werden). Die Eigenschaften des zurückgegebenen Objekts können geändert werden, selbst wenn sie in der relevanten Schnittstelle als schreibgeschützt markiert sind.

Manchmal muss eine API ein _neues_ Objekt oder eine _Kopie_ eines internen Objekts zurückgeben. Dieser Fall wird im WebIDL mit der `[NewObject]`-Anmerkung angezeigt.

```webidl
[NewObject]
   readonly attribute TimeRanges buffered;
```

In diesem Fall gibt jeder Aufruf von `buffered` ein anderes Objekt zurück: Das Ändern davon wird den internen Wert nicht ändern, und eine Änderung des internen Werts wird sich nicht auf jede Objektinstanz auswirken. In der Dokumentation werden wir es markieren, indem wir das Adjektiv _neu_ neben das Objekt setzen:

_Die **`HTMLMediaElement.buffered`**-Eigenschaft gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das…_

und

- _\\{{domxref("HTMLMediaElement.buffered")}}\\{{ReadOnlyInline}}_
  - : _Gibt ein neues \\{{domxref("TimeRanges")}}-Objekt zurück, das …_

Im Falle einer Referenz auf ein Sammlungsobjekt (wie `HTMLCollection`, `HTMLFormElementsCollection`, oder `HTMLOptionsCollection`, immer ohne `[NewObject]`) machen wir es explizit, dass Änderungen am zugrunde liegenden Objekt über die zurückgegebene Referenz verfügbar sein werden. Um dies zu markieren, qualifizieren wir die Sammlung als **live** `HTMLCollection` (oder `HTMLFormElementsCollections`, oder `HTMLOptionsCollection`), sowohl in der Schnittstellenbeschreibung als auch auf der Unterseite.

Z.B.

- \\{{domxref("HTMLFormElement.elements")}}\\{{ReadOnlyInline}}
  - : Gibt eine live \\{{domxref("HTMLFormControlsCollection")}} zurück, die…

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Eigenschaften in Workern ist ebenfalls im WebIDL enthalten. Für eine Eigenschaft ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (das heißt, sie ist nur verfügbar für den [`Window`](/de/docs/Web/API/Window)-Kontext, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob es in Webarbeitern verfügbar ist oder nicht, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Eigenschaften durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
    readonly attribute TextTrackList? textTracks;
```

Hier steuert die `media.webvtt.enabled`-Präferenz die `textTracks`-Eigenschaft.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Methoden

Sie können die Definition einer Methode an den Klammern nach dem Namen erkennen.

### Name der Methode

```webidl
DOMString canPlayType(DOMString type);
```

Der Name der Methode ist `canPlayType`, und wir werden uns darauf als `HTMLMediaElement.canPlayType()` (mit den Klammern, die anzeigen, dass es sich um eine Methode handelt) in den Docs beziehen, da es zur `HTMLMediaElement`-Schnittstelle gehört. Die Verlinkung auf die Seite erfolgt entweder **mit** dem Schnittstellenpräfix unter Verwendung von \\{{domxref('HTMLMediaElement.canPlayType()')}}, oder **ohne** das Präfix mit \\{{domxref('HTMLMediaElement.canPlayType', 'canPlayType()')}}, wenn der Kontext offensichtlich und unmissverständlich ist. Die Klammern sollten immer enthalten sein.

### Parameter

```webidl
TextTrack addTextTrack(TextTrackKind kind,
                       optional DOMString label = "",
                       optional DOMString language = "");
```

Die Parameter einer Methode sind im Abschnitt Syntax der Methoden-Unterseite aufgelistet. Sie sind im WebIDL in Reihenfolge, zwischen den Klammern, als kommagetrennte Liste aufgeführt. Jeder Parameter hat einen Namen (oben angegeben) und einen Typ (z.B. ein `'?'` bedeutet, dass der Wert `null` gültig ist.) Wenn `optional` markiert ist, ist der Parameter optional und muss das \\{{optional_inline}}-Flag enthalten, wenn er im Syntax-Abschnitt aufgelistet wird. Der Standardwert des Parameters wird nach dem Gleichheitszeichen (`'='`) aufgelistet.

Parametertypen können spezielle Verhaltensweisen haben, die mithilfe erweiterter Attribute beschrieben werden (wie `[LegacyNullToEmptyString]`). Hier ist die Liste solcher Attribute und die Ergänzung, die Sie im Prosa-Text machen müssen:

- `[LegacyNullToEmptyString]`
  - : Fügen Sie diesen Satz am Ende der Parameterbeschreibung hinzu: _Ein [`null`](/de/docs/Web/JavaScript/Reference/Operators/null)-Wert wird genauso behandelt wie der leere String (`""`)._

### Typ des Rückgabewertes

```webidl
DOMString canPlayType(DOMString type);
```

Der Typ des Rückgabewertes wird vor dem Methodennamen angegeben — in diesem Fall ist der Wert ein Objekt vom Typ `DOMString`. Wenn der Rückgabetyp von einem Fragezeichen (`'?'`) gefolgt ist, kann auch ein Wert von `null` zurückgegeben werden und die Dokumentation muss erklären, _wann_ dies der Fall sein kann. Wenn kein Fragezeichen vorhanden ist, wie hier, kann der Rückgabewert nicht `null` sein.

Wenn der Rückgabewert das Schlüsselwort `void` ist, bedeutet das, dass kein Rückgabewert vorhanden ist. Es ist kein Rückgabewerttyp. Wenn der WebIDL-Eintrag `void` liest, sollte der _Rückgabewert_-Abschnitt in den Docs einfach "Keine (\{{jsxref("undefined")}})." angeben.

### Auslösen von Ausnahmen

```webidl
[Throws]
   void fastSeek(double time);
```

Einige Methoden können Ausnahmen auslösen. Dies wird mit der `[Throws]`-Anmerkung markiert. Wenn dies der Fall ist, _muss_ der Syntax-Abschnitt der Methoden-Seite einen Abschnitt über Ausnahmen haben. Die Liste der Ausnahmen und die Bedingungen, unter denen sie ausgelöst werden, sind als Textinformationen in der Spezifikation dieser API aufgeführt.

Beachten Sie, dass einige Ausnahmen nicht explizit markiert sind, aber durch die JavaScript-Bindungen definiert sind. [Der Versuch, einen illegalen aufgezählten Wert](https://webidl.spec.whatwg.org/#es-enumeration) (der einer JavaScript {{jsxref('String')}} zugeordnet ist) als Parameter zu setzen, führt zu einer {{jsxref('TypeError')}}-Ausnahme. Dies muss dokumentiert werden, ist aber nur implizit im WebIDL-Dokument markiert.

Sehen Sie sich einen dieser [_Ausnahme_-Abschnitte](/de/docs/Web/API/SubtleCrypto/importKey#exceptions) an.

### Verfügbarkeit in Workern

Die individuelle Verfügbarkeit von Methoden in Workern ist ebenfalls im WebIDL enthalten. Für eine Methode ist die Standardeinstellung die gleiche Verfügbarkeit wie die `interface` (das heißt, sie ist nur für den [`Window`](/de/docs/Web/API/Window)-Kontext verfügbar, wenn nichts Besonderes markiert ist) oder wie die `partial interface`, in der sie definiert ist.

Für die Dokumentation muss die Unterseite einen Satz enthalten, der angibt, ob sie in Web-Workern verfügbar ist, direkt vor dem Abschnitt "Syntax".

### Präferenzen

> [!NOTE]
> Diese Informationen sind spezifisch für Gecko und sollten nur im Abschnitt Browser-Kompatibilität verwendet werden.

In Gecko kann die Verfügbarkeit einiger Methoden durch eine Präferenz gesteuert werden. Dies wird auch im WebIDL vermerkt.

```webidl
[Pref="media.webvtt.enabled"]
   TextTrack addTextTrack(TextTrackKind kind,
                          optional DOMString label = "",
                          optional DOMString language = "");
```

Hier steuert die `media.webvtt.enabled`-Präferenz die `addTextTrack()`-Methode.

> [!NOTE]
> Der Standardwert der Präferenz ist nicht direkt im WebIDL verfügbar (er kann von einem Produkt, das Gecko verwendet, zu einem anderen unterschiedlich sein).

## Spezielle Methoden

Einige Methoden sind nicht als reguläre Methoden in WebIDL aufgeführt, sondern als spezielle Schlüsselwörter, die in spezifische Standard-JavaScript-Methoden übersetzt werden.

### toString() und toJSON()

Ein Stringifier gibt an, wie ein Objekt basierend auf einer Schnittstelle in Kontexten aufgelöst wird, die einen String erwarten. (Siehe den Abschnitt [Stringifiers](#stringifiers).) Darüber hinaus wird das Schlüsselwort zu `toString()` zugeordnet und wie folgt definiert:

```webidl
stringifier;
```

Die `toString()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Range.toString()`](/de/docs/Web/API/Range/toString))

Ein Jsonifier wird zu `toJSON()` zugeordnet und wie folgt definiert:

```webidl
jsonifier; // Gecko version
serializer; // Standard version
```

Die `toJSON()`-Methode wird wie jede andere Methode der Schnittstelle aufgelistet und hat ihre eigene Unterseite (z.B. [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON))

> [!NOTE]
> Die WebIDL-Spezifikation verwendet `serializer` anstelle von `jsonifier`. Dies wird in Gecko nicht verwendet — nur der nicht standardisierte, wahrscheinlich frühe Vorschlag `jsonifier` ist in mozilla-central zu finden.

### Iteratorähnliche Methoden

Eine Schnittstelle kann als _iterierbar_ definiert sein, was bedeutet, dass sie die folgenden Methoden hat: `entries()`, `keys()`, `values()` und `forEach()`. Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert.

Es gibt zwei mögliche Iterationsarten: den _Werte-Iterator_ und den _Paar-Iterator_.

#### Werte-Iterator

```webidl
iterable<valueType>
```

Der Iterator wird über Werte des Typs _valueType_ iterieren. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes (die `unsigned long` sind) zurückgibt.
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt.
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel, die seine Indizes (die `unsigned long` sind) sind, zurückgibt. Im Fall von Werte-Iteratoren sind `keys()` und `entries()` identisch.
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt.

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Verkürzung von `for (const p in object.entries())`. Wir fügen in der Schnittstellenbeschreibung einen Satz darüber hinzu.

Die Werte, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei unter Verwendung der Notation `iterable<valueType>`. Zum Beispiel siehe [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- Implizit in der WebIDL-Datei, wenn die Schnittstelle indizierte Eigenschaften unterstützt. Dies wird angezeigt, wenn die Schnittstelle `getter`-Methoden mit einem Parameter des Typs `unsigned long` enthält.
- Außerhalb der WebIDL-Datei im begleitenden Prosa-Text. Eine solche Prosa befindet sich typischerweise in der Spezifikation und beginnt normalerweise mit: _"Die [Werte, über die iteriert werden soll](https://webidl.spec.whatwg.org/#dfn-value-iterator)…"_.

#### Paar-Iterator

```webidl
iterable<keyType, valueType>
```

Der Iterator wird über Werte des Typs _valueType_ mit Schlüsseln des Typs _keyType_ iterieren, das heißt die Wertepaare. Die generierten Methoden werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Wertepaare zurückgibt. Zum Beispiel siehe [`FormData.entries()`](/de/docs/Web/API/FormData/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel siehe [`FormData.values()`](/de/docs/Web/API/FormData/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel siehe [`FormData.keys()`](/de/docs/Web/API/FormData/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`Headers.forEach()`](/de/docs/Web/API/Headers/forEach).

Ein solcher Iterator ermöglicht die Verwendung der Syntax `for (const p in object)` als Verkürzung von `for (const p in object.entries())`. Wir fügen in der Schnittstellenbeschreibung einen Satz darüber hinzu. Z.B. [`FormData`](/de/docs/Web/API/FormData).

Die Wertepaare, über die iteriert werden soll, können auf eine der folgenden Arten definiert werden:

- In der WebIDL-Datei unter Verwendung der Notation `iterable<keyType, valueType>`. Zum Beispiel siehe [`FormData`](/de/docs/Web/API/FormData).
- Außerhalb der WebIDL-Datei im begleitenden Prosa-Text. Eine solche Prosa befindet sich typischerweise in der Spezifikation und beginnt normalerweise mit: _"Die [Wertepaare, über die iteriert werden soll](https://webidl.spec.whatwg.org/#dfn-value-pairs-to-iterate-over)…"_.

### Set-ähnliche Methoden

Eine Schnittstelle kann als _set-ähnlich_ definiert sein, was bedeutet, dass sie eine _geordnete Menge von Werten_ repräsentiert und die folgenden Methoden hat: `entries()`, `keys()`, `values()`, `forEach()` und `has()` (sie hat auch die `size`-Eigenschaft). Sie unterstützen auch die Verwendung von {{jsxref("Statements/for...of", "for...of")}} auf einem Objekt, das diese Schnittstelle implementiert. Das Set-ähnliche kann mit oder ohne `readonly` vorangestellt werden. Wenn nicht schreibgeschützt, werden die Methoden zur Änderung des Sets ebenfalls implementiert: `add()`, `clear()` und `delete()`.

```webidl
setlike<valueType>
```

Die generierten Eigenschaften werden sein:

- `entries()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Indizes zurückgibt. Zum Beispiel siehe [`NodeList.entries()`](/de/docs/Web/API/NodeList/entries).
- `values()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Werte zurückgibt. Zum Beispiel siehe [`NodeList.values()`](/de/docs/Web/API/NodeList/values).
- `keys()`, die einen [`iterator`](/de/docs/Web/JavaScript/Reference/Iteration_protocols) über die Schlüssel zurückgibt. Zum Beispiel siehe [`NodeList.keys()`](/de/docs/Web/API/NodeList/keys).
- `forEach()`, die eine gegebene Callback-Funktion einmal für jeden Eintrag in der Liste ausführt. Zum Beispiel siehe [`NodeList.forEach()`](/de/docs/Web/API/NodeList/forEach).

In Fällen, in denen die set-ähnliche Deklaration nicht schreibgeschützt vorangestellt ist, werden die folgenden Methoden ebenfalls generiert:

- `add()`, die einen Eintrag hinzufügt. Z.B. die `.add()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `clear()`, die die set-ähnliche Struktur leert. Z.B. die `.clear()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).
- `delete()`, die einen Eintrag entfernt. Z.B. die `.delete()`-Methode von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

Eine solche Setschnittstelle ermöglicht auch die Verwendung der Syntax `for (const p in object)` als Verkürzung von `for (const p in object.entries())`.

## Spezielle Verhaltensweisen

Einige IDL-Mitglieder zeigen spezielle Verhaltensweisen an, die auf den entsprechenden Seiten vermerkt werden sollten.

### Stringifiers

Zusätzlich zur Hinzufügung der `toString()`-Methode zu einer Schnittstelle, wie in [toString() und toJSON()](#tostring_and_tojson) beschrieben, geben Stringifiers auch an, dass eine Objektinstanz, wenn sie als String verwendet wird, einen String zurückgibt, der nicht dem Standard entspricht. (Der Standard ist normalerweise eine JSON-Darstellung des Objekts). Genau wie dies geschieht, hängt davon ab, wie es in der IDL angegeben ist. Unabhängig vom wie sollte das nicht standardmäßige Verhalten auf der Schnittstellenseite beschrieben werden.

Wenn das `stringifier`-Schlüsselwort zusammen mit einem Attributnamen verwendet wird, hat das Referenzieren des Objektnamens das gleiche Ergebnis wie das Referenzieren des Attributnamens. Betrachten Sie die folgende IDL:

```webidl
interface InterfaceIdentifier {
  stringifier attribute DOMString DOMString name;
};
```

Für eine Klasse basierend auf dieser Schnittstelle sind die folgenden Codezeilen äquivalent. Das Verhalten sollte auf der Eigenschaftsseite zusätzlich zur Schnittstellenseite vermerkt werden.

```js
console.log(interfaceIdentifier);
console.log(interfaceIdentifier.name);
```

Wenn das `stringifier`-Schlüsselwort alleine verwendet wird, kann ein Objekt der Schnittstelle wie oben verwendet werden, aber das Verhalten ist im Quellcode definiert.

```webidl
interface InterfaceIdentifier {
  stringifier;
};
```

Um zu erfahren, was eine Schnittstellenreferenz tatsächlich bewirkt, siehe die Spezifikation der Schnittstelle oder experimentieren Sie mit der Schnittstelle, um ihre Ausgabe zu bestimmen.

## Konstruktoren

Konstruktoren sind im WebIDL ein wenig versteckt: sie sind als Anmerkungen der Hauptschnittstelle aufgelistet.

### Ungenannte Konstruktoren

Dies ist der häufigste Fall für Konstruktoren. Der Konstruktor einer gegebenen Schnittstelle A kann als `a = new A(parameters);` verwendet werden.

```webidl
[Constructor, Func="MessageChannel::Enabled",
  Exposed=(Window,Worker)]
    interface MessageChannel {…};
```

Ein Konstruktor mit der gleichen Schnittstelle wird unter Verwendung der `Constructor`-Anmerkung der Schnittstelle definiert. Es kann Klammern und eine Liste von Parametern enthalten oder nicht (wie im obigen Beispiel). Wir dokumentieren alle ungenannten Konstruktoren auf einer Unterseite — zum Beispiel wird die obenstehende mit dem Slug _Web/API/MessageChannel/MessageChannel_ und dem Titel `MessageChannel()` dokumentiert.

Ein anderes Beispiel für einen ungenannten Konstruktor, mit Parametern:

```webidl
[Constructor(DOMString type, optional MessageEventInit eventInitDict),
 Exposed=(Window,Worker,System)]
   interface MessageEvent : Event {…};
```

Es kann auch mehrere ungenannte Konstruktoren geben, die sich durch ihre Parameterlisten unterscheiden. Alle Syntax wird in einer einzigen Unterseite dokumentiert.

```webidl
[Constructor(DOMString url, URL base),
 Constructor(DOMString url, optional DOMString base),
 Exposed=(Window,Worker)]
    interface URL {};
```

### Benannte Konstruktoren

```webidl
[NamedConstructor=Image(optional unsigned long width, optional unsigned long height)]
    interface HTMLImageElement : HTMLElement {…
```

Ein benannter Konstruktor ist ein Konstruktor, dessen Name sich von dem seiner Schnittstelle unterscheidet. Zum Beispiel erzeugt `new Image(…)` ein neues `HTMLImageElement`-Objekt. Sie werden im WebIDL unter Verwendung der `NamedConstructor`-Anmerkung auf der Schnittstelle definiert, gefolgt vom Namen des Konstruktors nach dem Gleichheitszeichen (`'='`) und den Parametern in den Klammer, im gleichen Format, das man für Methoden sieht.

Es kann mehrere benannte Konstruktoren für eine bestimmte Schnittstelle geben, aber das ist extrem selten; in einem solchen Fall schließen wir eine Unterseite pro Name ein.

### Neue Konstruktor-Syntax

Ab September 2019 wurde die WebIDL-Konstruktorsyntax aktualisiert. Die Konstruktorsyntax beinhaltet keine erweiterte Attributangabe auf der Schnittstelle mehr:

```webidl
[Constructor(DOMString str)]
    interface MyInterface {
      ...
};
```

Neue Spezifikationen verwenden stattdessen eine methodenähnliche Syntax namens `constructor` ohne explizit definierten Rückgabetyp, wie folgt geschrieben:

```webidl
interface MyInterface {
  constructor(DOMString str);
};
```

Dies bedeutet, dass erweiterte Attribute nun auf dem Konstruktor angegeben werden können, und es wird nicht mehr angenommen, dass alle Konstruktoren werfen. Wenn ein Konstruktor wirft, wird `[Throws]` verwendet, um darauf hinzuweisen:

```webidl
interface MyInterface {
  [Throws] constructor();
};
```

Es ist unwahrscheinlich, dass _alle_ Spezifikationen aktualisiert werden, um die neue Syntax zu verwenden, sodass Sie wahrscheinlich beide in der Wildnis finden werden. Daher werden wir hier weiterhin beide Syntaxarten abdecken.

### Verfügbarkeit in Workern

Konstruktoren haben die gleiche Verfügbarkeit wie die Schnittstelle oder die Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite stellt diese Informationen in gleicher Weise wie bei einer Methode bereit.

### Präferenzen

Konstruktoren werden durch die gleiche Präferenz gesteuert wie die Schnittstelle oder die Partial-Schnittstelle, auf der sie definiert sind. Die Unterseite stellt diese Informationen in gleicher Weise wie bei einer Methode bereit.
