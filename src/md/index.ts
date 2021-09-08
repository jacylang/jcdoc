import {highlight} from 'highlight'
import 'showdown'

const CODE_FENCE_REGEX = /```(\w+)(\n[\s\S]+?)```/g

const codeTmpl = (lang: string, code: string) => `
<pre>
    <code class="language-${lang}">${code}</code>
</pre>
`

class Markdown {
    toHtml(md: string) {
    }

    replaceCodeBlocks(md: string) {
        return md.replaceAll(CODE_FENCE_REGEX), (match, lang, code) => {
            return codeTmpl(lang, code)
        })
    }
}

export default new Markdown
